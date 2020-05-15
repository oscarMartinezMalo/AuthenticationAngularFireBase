import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

interface Data {
    title: string;
    message: string;
}

@Component({
    selector: 'app-dialog-custom',
    templateUrl: './dialog-custom.component.html',
    styleUrls: ['./dialog-custom.component.scss']
})
export class DialogCustomComponent implements OnInit {

    title: string;
    message: string;

    constructor(public dialogRef: MatDialogRef<DialogCustomComponent>,
                @Inject(MAT_DIALOG_DATA) public data: DialogData) {
        // Update view with given values
        this.title = data.title;
        this.message = data.message;
    }

    ngOnInit(): void {
    }

    onConfirm(): void {
        // Close the dialog, return true
        this.dialogRef.close(true);
    }

    onDismiss(): void {
        // Close the dialog, return false
        this.dialogRef.close(false);
    }

}

export class DialogData {
    constructor(public title: string, public message: string) {
    }
}