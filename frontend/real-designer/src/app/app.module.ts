import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component'
import { GenericSelectDialog } from "./dialogs/dialogs.component";

// Angular material
import { MaterialModule } from './material.module';

// Services
import { DesignerService } from './designer/designer.service';

// Modules
import { ProjectManagementModule } from './project-management/project-management.module'
import { EntityManagementModule } from './entity-management/entity-management.module'
import { ComponentManagementModule } from './component-management/component-management.module'
import { ProcedureDesignerModule } from './procedure-designer/procedure-designer.module'
import { AssetManagementModule } from './asset-management/asset-management.module'
import { LoginScreenModule } from './login-screen/login-screen.module'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GenericSelectDialog,
  ],
  entryComponents: [
    GenericSelectDialog,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    ProjectManagementModule,
    EntityManagementModule,
    ComponentManagementModule,
    ProcedureDesignerModule,
    AssetManagementModule,
    LoginScreenModule,
    FormsModule,
  ],
  providers: [
    DesignerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
