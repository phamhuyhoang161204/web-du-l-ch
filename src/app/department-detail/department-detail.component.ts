import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  department: any;
  departmentDetails: any[] = [];
  selectedSeason: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const departmentId = +params['id'];
      
      // Di chuyển code xử lý tại đây
      const navigation = window.history.state;

      if (navigation && navigation.department) {
        this.department = navigation.department;
        this.departmentDetails = [
          { title: this.department.muadep, content: this.department.title1, image: this.department.images1 },
          { title: this.department.dichuyen, content: this.department.title2, image: this.department.images2 },
          { title: this.department.choidau, content: this.department.title3, image: this.department.images3 },
          { title: this.department.anuong, content: this.department.title4, image: this.department.images4 }
        ];
      } else {
        console.error('Không có thông tin department trong state');
        // Xử lý khi không có thông tin department trong state
      }
    });
  }

  selectSeason(season: string) {
    this.selectedSeason = season;
  }
}
