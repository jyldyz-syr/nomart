import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const images = [
  {
    url:
      "https://render.fineartamerica.com/images/rendered/search/print/8/8/break/images/artworkimages/medium/1/painting-787-1-buzkashi-mawra-tahreem.jpg",
    title: "Paintings",
    width: "30%",
    link: "/fashion?_page=1&_limit=6&category=Paintings",
  },
  {
    url: "https://img.artpal.com/059171/1-20-5-14-3-1-10m.jpg",
    title: "Decor",
    width: "40%",
    link: "/fashion?_page=1&_limit=6&category=Decor",
  },
  {
    url:
      "https://ak.picdn.net/offset/photos/5898befaba6f6bfc1a4a161b/large_w/offset_498020.jpg",
    title: "Sculptures",
    width: "30%",
    link: "/fashion?_page=1&_limit=6&category=Sculptures",
  },
];

const images2 = [
  {
    url:
      "https://images.saatchiart.com/saatchi/1417485/art/7272287/6341501-DXQZQFNB-7.jpg",
    title: "Assesories",
    width: "40%",
    link: "/fashion?_page=1&_limit=6&category=Assesories",
  },

  {
    url: "https://i.ibb.co/KWd4tnF/IMG-1067.png",
    title: "Nomad Art",
    width: "40%",
    link: "/fashion?_page=1&_limit=6",
  },
  {
    url:
      "https://i.pinimg.com/564x/fb/a0/88/fba08849e2186b740d1d7689dd3ad34f.jpg",
    title: "All",
    width: "20%",
    link: "/fashion?_page=1&_limit=6",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    marginTop: "20px",
    // margin:"50px"
  },
  image: {
    position: "relative",
    height: 400,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 200,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          //  <Link to={image.link}></Link>
          href={image.link}
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
      {images2.map((image) => (
        <ButtonBase
          href={image.link}
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}
