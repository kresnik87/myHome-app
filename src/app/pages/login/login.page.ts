import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import {UserCustomService} from '../../../services/user-custom.service';
import {AuthService,STORAGE_KEY_LOGIN} from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public onLoginForm: FormGroup;
  public loading:boolean;
  constructor(
    public navCtrl: NavController,
    public userService:UserCustomService,
    public authService:AuthService,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {

    this.onLoginForm = this.formBuilder.group({
      username: [null, Validators.compose([
        Validators.required
      ])],
      remember: [false],
      password: [null, Validators.compose([
        //                Validators.maxLength(25),
        //                Validators.minLength(8),
        Validators.required
      ])],
    });
  }

  async forgotPass() {
    const alert = await this.alertCtrl.create({
      header: 'Forgot Password?',
      message: 'Enter you email address to send a reset link password.',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Email'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirm',
          handler: async () => {
            const loader = await this.loadingCtrl.create({
              duration: 2000
            });

            loader.present();
            loader.onWillDismiss().then(async l => {
              const toast = await this.toastCtrl.create({
                showCloseButton: true,
                message: 'Email was sended successfully.',
                duration: 3000,
                position: 'bottom'
              });

              toast.present();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  // // //
  goToRegister() {
    this.navCtrl.navigateRoot('/register');
  }

  goToHome() {
    this.navCtrl.navigateRoot('/tab');
  }
  login()
  {
    this.loading = true;
    this.checkLogin(this.onLoginForm.get("username").value, this.onLoginForm.get("password").value).then(
        (success) =>
        {
          console.log("Login", success);
          this.userService.getLocalUser(true).then(
              () =>
              {
                this.loading = false;
                this.goToHome();
              },
              (err) =>
              {
                this.loading = false;

              }
          );
        },
        (err) =>
        {

        }
    );

  }

  checkLogin(username:string,password:string)
  {
    let THIS = this;
    return new Promise<boolean>(function (resolve, reject)
    {

      if (THIS.onLoginForm.valid)
      {
        THIS.authService.login(username,password).then(
            (res) =>
            {

              if (THIS.onLoginForm.get("remember").value)
              {
                THIS.authService.storeLogin(THIS.onLoginForm.get("username").value, THIS.onLoginForm.get("password").value);
                resolve(true);
              }
              else
              {
                THIS.authService.removeLocal(STORAGE_KEY_LOGIN);
                resolve(true);
              }
            },
            (err) =>
            {

              reject(err);
            }
        );
      }
    });
  }
}
