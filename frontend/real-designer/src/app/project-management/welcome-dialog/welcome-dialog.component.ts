import { Component, OnInit, Input, Output, EventEmitter, Pipe, PipeTransform } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatChipInputEvent } from "@angular/material";
import { FormControl, Validators } from '@angular/forms';
import { DesignerService } from '../../designer/designer.service';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

@Component({
    selector: 'app-welcome-dialog',
    templateUrl: './welcome-dialog.component.html',
    styleUrls: ['./welcome-dialog.component.css']
})
export class WelcomeDialogComponent implements OnInit {

    constructor(private designerService: DesignerService, private dialogRef: MatDialogRef<WelcomeDialogComponent>) {}

    currentView: number = 0;
    projectName = new FormControl('', [Validators.required]);
    projectDescription = new FormControl('');
    projectTags = new FormControl('');

    visible: boolean = true;
    selectable: boolean = true;
    removable: boolean = true;
    addOnBlur: boolean = true;

    ngOnInit() {
    }

    getAllProjects() {
        return Array.from(this.designerService.getAllProjects().keys());
    }

    newProject() {
        this.currentView = 1;
    }

    loadProject(name: string) {
        this.dialogRef.close();
        this.projectName.setValue(name); // Hack
        this.designerService.loadProject(name);
    }

    createProject() {
        if (this.projectName.valid) {
            this.dialogRef.close();
        } else {
            this.projectName.markAsTouched();
        }
        this.designerService.newProject(this.projectName.value);
    }

    cancelNewProject() {
        this.currentView = 0;
        // Clear all fields
        this.projectName.markAsUntouched();
        this.projectName.setValue('');
        this.projectDescription.setValue('');
        this.projectTags.setValue('');
        this.tags = [];
    }

    /* Tags Functionality */

    tags = [];  // Add tags in here for predefined tags
    separatorKeysCodes = [ENTER, COMMA];    // Enter, comma

    addTag(event: MatChipInputEvent): void {
        let input = event.input;
        let value = event.value;

        // Add our tag
        if ((value || '').trim()) {
            this.tags.push({ name: value.trim() });
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }
    }

    removeTag(tag: any): void {
        let index = this.tags.indexOf(tag);

        if (index >= 0) {
            this.tags.splice(index, 1);
        }
    }

}
