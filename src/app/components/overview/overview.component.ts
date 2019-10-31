import { Component, OnInit } from '@angular/core';
import { ApiInfo } from '../../models/api-info';
import { ApiInfoService } from '../../logic/api-info-service';
import { Card } from '../../models/card';
import { ApiCardService } from '../../logic/api.card.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CardDisplayingService } from './card.displaying.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  public formGroup: FormGroup;


  constructor(private formBuilder: FormBuilder,
    public displayingService: CardDisplayingService) { }

  ngOnInit() {
      this.formGroup = new FormGroup({
      ExpansionsControl: new FormControl()
    })

  }

  onChangeExpansion() {
    let value = this.formGroup.get("ExpansionsControl").value
    this.displayingService.onChangeExpansion(value);
  }

  getSets(): string[] {
    let sets = null;
    if(this.displayingService.apiInfo != null) {
      sets = this.displayingService.apiInfo.sets;
    }
    this.formGroup.get("ExpansionsControl").updateValueAndValidity();
    return sets;
  }
}