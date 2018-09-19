import PropTypes from "prop-types";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class  DisplayData extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state({
            name:''
        });
      }

      render(){
          return(
            <div>
            <Card
              style={{
                width: "150px",
                height: "150px",
                backgroundColor: "#E5E4E2"
              }}
            >
              <CardContent style={{ borderTop: "10px" }}>
                <Typography style={{ textAlign: "center" }}></Typography>
              </CardContent>
              <CardActions>
                <Button
                  style={{ backgroundColor: "#98AFC7" }}
                  onClick={() => {
                  this.props.viewData(data);
                  }}
                >
                  View More
                </Button>
              </CardActions>
            </Card>
          </div>
          )
      }
    // console.log(props, "filteredArray");
    // return props.filteredArray.map((data, index) => {
    //   return (
       
    //   );
    // });
};

export default DisplayData;