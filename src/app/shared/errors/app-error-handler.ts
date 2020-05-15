import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class AppErrorHandler implements ErrorHandler {

    handleError(error: any): void {
        // alert('An unexpected error occured.');
        console.error(error);
    }
}
