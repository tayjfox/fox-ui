/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { CommonModule } from '@angular/common';
import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbMenuModule,
  NbSelectModule,
  NbSidebarModule,
  NbTabsetModule,
} from '@nebular/theme';

import {
  NgdColorSwatchDirective,
  NgdDescriptionDirective,
  NgdFooterComponent,
  NgdFragmentTargetDirective,
  NgdHeaderComponent,
  NgdHeroComponent,
  NgdIconCardComponent,
  NgdPageTabsComponent,
  NgdPageTocComponent,
  NgdSearchComponent,
  NgdTextCardComponent,
} from './components';
import { AkveoServicesBanner } from './components/hubspot-cta/akveo-services-banner.component';
import {
  NgdAnalytics,
  NgdCodeLoaderService,
  NgdHighlightService,
  NgdIframeCommunicatorService,
  NgdMenuService,
  NgdMetadataService,
  NgdPaginationService,
  NgdStructureService,
  NgdStylesService,
  NgdTabbedService,
  NgdTextService,
  NgdVersionService,
  NgdVisibilityService,
} from './services';

@NgModule({
  imports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule,
    NbCardModule,
    NbMenuModule,
    NbTabsetModule,
    NbIconModule,
    NbButtonModule,
    NbSelectModule,
    NbInputModule,
    NbEvaIconsModule,
    RouterModule,
  ],
  declarations: [
    NgdHeaderComponent,
    NgdHeroComponent,
    NgdIconCardComponent,
    NgdTextCardComponent,
    NgdFooterComponent,
    NgdFragmentTargetDirective,
    NgdPageTocComponent,
    NgdPageTabsComponent,
    NgdColorSwatchDirective,
    NgdDescriptionDirective,
    NgdSearchComponent,
    AkveoServicesBanner,
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NbIconModule,
    NbLayoutModule,
    NbSidebarModule,
    NbCardModule,
    NbMenuModule,
    NbTabsetModule,
    NbCheckboxModule,
    NgdHeaderComponent,
    NgdHeroComponent,
    NgdIconCardComponent,
    NgdTextCardComponent,
    NgdFooterComponent,
    NgdFragmentTargetDirective,
    NgdPageTocComponent,
    NgdPageTabsComponent,
    NgdColorSwatchDirective,
    NgdDescriptionDirective,
    AkveoServicesBanner,
  ],
})
export class NgdThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: NgdThemeModule,
      providers: [
        NgdHighlightService,
        NgdTextService,
        NgdTabbedService,
        NgdStructureService,
        NgdCodeLoaderService,
        NgdIframeCommunicatorService,
        NgdStylesService,
        NgdVersionService,
        NgdPaginationService,
        NgdAnalytics,
        NgdMenuService,
        NgdVisibilityService,
        NgdMetadataService,
      ],
    };
  }
}
