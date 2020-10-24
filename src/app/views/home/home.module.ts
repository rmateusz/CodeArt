import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { VisualizationSketchModule } from 'src/app/components/visualization-sketch/visualization-sketch.module';
import { SlideshowModule } from 'ng-simple-slideshow';
import { NgImageSliderModule } from 'ng-image-slider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    VisualizationSketchModule,
    NgImageSliderModule,
    SlideshowModule
  ]
})
export class HomeModule { }
