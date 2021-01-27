import {Component, Input, OnInit} from '@angular/core';
import {DistrictInfo} from '../../shared/interfaces';
import {DistrictService} from '../../common/services';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {

  // public title = 'District List of Bangladesh';
  // public numberOfDistrict = 0;
  public listOfDistrict: DistrictInfo[] = [];
  public listOfDeletedDistrict: DistrictInfo[] = [];

  constructor(private districtService: DistrictService) {
    this.setDistrictList();
  }

  ngOnInit(): void {
  }

  private setDistrictList(): void{
    this.districtService.getDistrictList().then(res => {
      if (res.serviceResult && res.serviceResult.success === true){
        this.listOfDistrict = this.getRectifiedDistricts(res.data);
        // this.numberOfDistrict = this.getNumberOfDistricts();
        // this.setNumberOfDistricts(res.data);
      }
      else {
        console.log('Error', res);
      }
    });
  }
  private getRectifiedDistricts(districtList: DistrictInfo[]): DistrictInfo[]{
    for (const it of districtList)
    {
      it.density = Math.floor(it.population / it.areaSqKm);
    }
    return districtList;
  }
  public getNumberOfDistricts(): number {
    return (this.listOfDistrict.length);
  }

  public getNumberOfDeletedDistricts(): number {
    return (this.listOfDeletedDistrict.length);
  }
  /*
  private setNumberOfDistricts(districtList: DistrictInfo[]): void{
    this.numberOfDistrict = (districtList.length);
  }


  public reCount(event: number): void{
    this.numberOfDistrict = this.districtList.length;
  }*/

  public rowHasRemoved(list: DistrictInfo[]): void {
    for (const it of list) {
      this.listOfDeletedDistrict.push(it);
    }
  }
}
