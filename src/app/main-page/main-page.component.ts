import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { IProfile } from '../interfaces/profile.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  allProfiles: IProfile[] = [];
  currentProfile: any;
  currentIndex: number = 0;
  isProfilesEmpty: boolean = false;

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.getAllPhotos();
  }

  getAllPhotos(): void {
    this.mainService.getAllProfiles().subscribe(
      result => {
        this.allProfiles = result;
        this.getNextProfile(0);
      }
    )
  }

  getNextProfile(index: number): void {
    if (this.allProfiles[index]) {
      this.currentProfile = this.allProfiles[index];
      this.isProfilesEmpty = false;
    } else {
      this.isProfilesEmpty = true;
    }
    this.currentIndex = index;
  }


}
