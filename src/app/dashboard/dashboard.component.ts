import {Component} from "@angular/core";
import '../../style.css';

import {UserService} from "../userlist/userService/user.service";

declare var $: any;

import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { MultiDataSet, Color, SingleDataSet, Label } from 'ng2-charts';


@Component({
    selector: "dashboard-app",	
    styleUrls: [String(require("./dashboard.component.css"))],
    template: require("./dashboard.component.html"),
})
export class DashboardComponent {
	public lineChartData: ChartDataSets[] = [
	    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
	  ];
	  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
	  /*public lineChartOptions: (ChartOptions & { annotation: any }) = {
	    responsive: true,
	  };*/
	  public lineChartColors: Color[] = [
	    {
	      borderColor: 'black',
	      backgroundColor: 'rgba(255,0,0,0.3)',
	    },
	  ];
	  public lineChartLegend = true;
	  public lineChartType = 'line';



	// Pie
	  public pieChartOptions: ChartOptions = {
	    responsive: true,
	  };
	  public pieChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
	  public pieChartData: SingleDataSet = [300, 500, 100];
	  public pieChartType = 'pie';
	  public pieChartLegend = true;


	//bar
	public barChartOptions: ChartOptions = {
	    responsive: true,
	  };
	  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
	  public barChartType = 'bar';
	  public barChartLegend = true;
	  public barChartPlugins: any[];

	  public barChartData: ChartDataSets[] = [
	    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
	    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
	  ];

	  // Doughnut
	  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
	  public doughnutChartData: MultiDataSet = [
	    [350, 450, 100],
	    [50, 150, 120],
	    [250, 130, 70],
	  ];
	  public doughnutChartType: ChartType = 'doughnut';

	   // Radar
	  public radarChartOptions: ChartOptions = {
	    responsive: true,
	  };
	  public radarChartLabels: Label[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

	  public radarChartData: ChartDataSets[] = [
	    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
	    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
	  ];
	  public radarChartType = 'radar';

  constructor(private userService: UserService) { }

  ngOnInit() {
  	if(this.userService.getSidebarToggle()){
  		document.getElementById("mySidebar").style.width = "0";
  		document.getElementById("main").style.marginLeft = "0";
  	}else{
  		document.getElementById("mySidebar").style.width = "250px";
  		document.getElementById("main").style.marginLeft = "250px";
  	}
  }

  openNav() {
  	$(document).ready(function() {
	    document.getElementById("mySidebar").style.width = "250px";
  		document.getElementById("main").style.marginLeft = "250px";
	});
  }
}
