import {Injectable} from '@angular/core';
import {ToastController, LoadingController} from '@ionic/angular';
import {Platform} from '@ionic/angular';
import {ToastOptions} from '@ionic/core'
import {TranslateService} from '@ngx-translate/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Vibration} from '@ionic-native/vibration';
import {environment} from '../environments/environment';
export const TOAST_DEFAUL_DURATION = 3000;
export const TOAST_DEFAUL_POSITION = "top";
export const TOAST_CLASS_ERROR = "toast-error";
export const TOAST_CLASS_SUCCESS = "toast-success";
export const TOAST_ERROR_TRANS_KEY = "error";
export const TOAST_ERROR_TRANS_DEFAULT = "server";



@Injectable({
    providedIn: 'root'
})
export class ToastProvider
{
    private toast: any = null;
    private loading: any = null;

    constructor(
        private platform: Platform,
        private toastCtrl: ToastController,
        private loadingCtrl: LoadingController,
        private translate: TranslateService,
    )
    {
    }
    catchError(err: HttpErrorResponse = null, toast: boolean = true)
    {
        return new Promise(
            (resolve, reject) =>
            {
                //check for custom error 
                this.transformError(this.extractError(err), toast).then(
                    (res) =>
                    {
                        resolve(res);

                    },
                    (err) =>
                    {
                        reject(err);
                    }
                );
            }
        );
    }

    private extractError(err: HttpErrorResponse)
    {
        let error = null;
        if (err && err.error)
        {
            if (err.error.detail)
            {
                error = err.error.detail;
            } else
            {
                //check if is json format

                if (err.error.error && err.error.error.exception)
                {
                    error = err.error.error.exception[0].message;
                } else
                {
                    error = err.error.error;
                }
            }
        }
        if (!error && err && err.status == 404)
        {
            error = "no_found";
        }
        console.log("extract error", error, err);
        return error;
    }
    transformError(key: string = null, toast: boolean = false)
    {
        return new Promise(
            (resolve, reject) =>
            {
                if (!key)
                {
                    key = TOAST_ERROR_TRANS_DEFAULT;
                } else
                {
                    //                lower and without spaces
                    key = key.toLowerCase().replace(/ /g, "_");;
                }

                let error = TOAST_ERROR_TRANS_KEY + "." + key.toLowerCase();
                this.translate.get(error).subscribe(
                    (resp) =>
                    {
                        if (resp != error)
                        {
                            if (toast)
                            {
                                this.toastMsg(resp, TOAST_CLASS_ERROR);
                            }

                            resolve(resp)

                        } else
                        {
                            this.translate.get(TOAST_ERROR_TRANS_KEY + "." + TOAST_ERROR_TRANS_DEFAULT).subscribe(
                                (resp) =>
                                {
                                    if (toast)
                                    {
                                        this.toastMsg(resp, TOAST_CLASS_ERROR);
                                    }
                                    resolve(resp)
                                }
                            );
                        }
                    },
                    (err) =>
                    {
                        reject(err);
                    }
                );
            }
        );
    }
    toastMsgTrans(msg: string, cssclass: string = null)
    {
        return new Promise(
            (resolve, reject) =>
            {
                this.translate.get(msg).subscribe(
                    (resp) =>
                    {
                        this.toastMsg(resp, cssclass).then(
                            (res) =>
                            {
                                resolve(res);
                            },
                            (err) =>
                            {
                                reject(err);
                            }
                        );
                    }
                );
            }
        );
    }
    toastMsg(msg: string, cssclass: string = TOAST_CLASS_SUCCESS)
    {
        return new Promise(
            (resolve, reject) =>
            {
                if (this.toast)
                {
                    this.toast.dismiss();
                }
                let opts: ToastOptions = {
                    message: msg,
                    duration: TOAST_DEFAUL_DURATION,
                    position: TOAST_DEFAUL_POSITION,
                    cssClass: cssclass ? cssclass : TOAST_CLASS_SUCCESS,
                    mode: 'md'
                }
                this.toastCtrl.create(opts).then(
                    (res) =>
                    {
                        this.toast = res;
                        this.toast.present();
                        resolve(res);
                    },
                    (err) =>
                    {
                        reject(err);
                    }
                );
            }
        );
    }

    loadingMsg(msg: string = null, autodismiss: boolean = true)
    {
        return new Promise(
            (resolve, reject) =>
            {
                //            && this.loading.isFirst()
                if (this.loading)
                {
                    console.log("auto hidding loading");
                    this.loading.dismiss().then(() => {}, () => {});
                }

                console.log("create a new loading toast");
                this.loadingCtrl.create({
                    spinner: 'crescent',
                    message: msg,
                    translucent: true,
                    cssClass: ["loading"],
                    mode: 'md'
                    //            dismissOnPageChange: autodismiss
                }).then(
                    (res) =>
                    {
                        this.loading = res;
                        this.loading.present()
                        resolve();
                    },
                    () =>
                    {
                        reject();
                    }
                );

            }
        );
    }

    loadingComplete()
    {
        return new Promise(
            (resolve, reject) =>
            {
                console.log("loadingComplete");
                if (this.loading)
                {
                    console.log("hidding loading");
                    this.loading.dismiss().then(
                        (res) =>
                        {
                            if (this.platform.is('cordova'))
                            {
                                Vibration.vibrate(300);
                            }
                            resolve(res);
                        },
                        (err) =>
                        {
                            reject(err);
                        });
                } else
                {
                    console.log("auto hidded loading", this.loading);
                    resolve(true);
                }
            }
        );
    }

}
