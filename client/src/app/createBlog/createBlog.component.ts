import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
    selector: 'create-blog',
    templateUrl: './createBlog.component.html',
    styleUrls: ['./createBlog.component.css']
})
export class CreateBlogComponent implements OnInit {
    constructor(public dialog: MatDialog, private router: Router) { }
    isLoggedIn: any;
    ngOnInit() {
        // this.isLoggedIn = localStorage.getItem('isLoggedIn');
    }
   
}