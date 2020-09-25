import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Countdown from "react-countdown";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
export default function HeaderHome() {
  let url =
    "http://techtrek2020.ap-southeast-1.elasticbeanstalk.com/extendSession";
  let token = window.localStorage.getItem("token");
  let countDownTime = window.localStorage.getItem("expDate");
  const [expTime, setExpTime] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = useState(0);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let countDownTime = window.localStorage.getItem("expDate");
    if (countDownTime != null) {
      setExpTime(new Date(countDownTime));
    }
  }, [count]);

  const handleExtend = (e) => {
    e.preventDefault();
    console.log("extending session");
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        window.localStorage.setItem("token", data);
        window.localStorage.setItem(
          "expDate",
          new Date(new Date().getTime() + 1 * 60 * 1000)
        );
        setCount(count + 1);
        handleClose();
      })
      .catch((err) => console.log(err));
  };
  // const [timeLeft, setTimeLeft] = useState(false);
  // if (countDownTime != null) {
  //   let myfunc = setInterval(function () {
  //     let now = new Date().getTime();
  //     let timeleft = new Date(countDownTime) - now;

  //     let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  //     let hours = Math.floor(
  //       (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //     );
  //     let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  //     let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  //     if (timeLeft < 0) {
  //       alert("Hello time to renew");
  //     }
  //   }, 1000);
  // }

  // console.log(new Date(countDownTime).getTime());
  if (expTime) {
    return (
      <header class="text-gray-700 body-font">
        <Link to="/home">
          <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img
                class="w-25 h-20 text-white p-2"
                src="https://logos-download.com/wp-content/uploads/2016/12/DBS_Bank_logo_logotype.png"
              />
            </a>
          </div>
          <Countdown date={expTime} onComplete={handleClickOpen} />
        </Link>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Bro you want extend session?
          </DialogTitle>
          {/* <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Bro you want extend session?
            </DialogContentText>
          </DialogContent> */}
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Don't want
            </Button>
            <Button onClick={handleExtend} color="primary" autoFocus>
              Extend
            </Button>
          </DialogActions>
        </Dialog>
      </header>
    );
  } else
    return (
      <header class="text-gray-700 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              class="w-25 h-20 text-white p-2"
              src="https://logos-download.com/wp-content/uploads/2016/12/DBS_Bank_logo_logotype.png"
            />
          </a>
        </div>
      </header>
    );
}
