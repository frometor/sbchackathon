import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {GraphqlIosAppService} from '../graphql-ios-app.service'
import {TrainoverviewService} from '../trainoverview.service'

@Component({
  selector: 'app-trainoverview',
  templateUrl: './trainoverview.component.html',
  styleUrls: ['./trainoverview.component.css']
})
export class TrainoverviewComponent implements OnInit {

  _data: any;
  _dataAll: any=[];

  constructor(private graphqlIosAppService: GraphqlIosAppService, private trainoverviewService: TrainoverviewService) {
  }

  ngOnInit() {

    this.trainoverviewService.getAllTrains().subscribe(
      (data: any) => {
        console.log(data["data"]["allTransports"]);
        this._dataAll=[];
        for (var i in data["data"]["allTransports"]) {
          if ((data["data"]["allTransports"][i].client === undefined) || (data["data"]["allTransports"][i].client === null)) {
          }
          else {
            console.log(data["data"]["allTransports"][i]);
            this._dataAll.push(data["data"]["allTransports"][i]);
          }
        }
       // this._dataAll = data["data"]["allTransports"];
        console.log(this._dataAll);
        this.checkDataTable(this._dataAll);
        //this.checkDataTable();
//        console.log("Bam",this._dataAll["data"]["allTransports"])

      }
    );


    this.graphqlIosAppService.getexactDateofArrival("688479005").subscribe(
      (data: any) => {
        this._data = data;
        console.log(this._data);

        //this.createTable(this._data);
      }
    )
  }
  private giveTimeEstimate(){
    var newDate = new Date();
    var returnDate=new Date(newDate.getTime()+8000000);

    return returnDate;
  }

  private checkDataTable(_data: any) {
console.log("CHECKED",_data);

  }
}
