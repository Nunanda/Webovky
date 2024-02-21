import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service';
import { IndexDbService } from 'src/app/service/index-db-service.service';
import { Instruction, User } from 'src/app/types';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User | undefined;
  instruction: Instruction | undefined;

  constructor(private indexDbService: IndexDbService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getUserFromDB();
  }

  getUserFromDB(): void {
    this.indexDbService.dbReady$.subscribe(() => {
      this.indexDbService.getUserById(String(this.tokenService.getUserId()))
        .then((user: User | undefined) => {
          this.user = user;
        })
        .catch(error => {
          console.error('Error fetching user:', error);
        });
    });
  }
}
