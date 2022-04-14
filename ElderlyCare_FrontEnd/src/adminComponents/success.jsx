import React, { Component } from "react";
import Button from "../basicComponents/button";
import { FONTS, COLORS } from "../theme/theme";
import Swal from "sweetalert2";

export default class AlertSuccess extends Component {

    constructor() {
        super();
        this.HandleClick = this.HandleClick.bind(this);
    }

    HandleClick() {
        Swal.fire({
            title: this.props.title,
            footer: this.props.footer,
            type: this.props.type,
            text: this.props.text,
        });
    }

    render() {
        return (
            <div>
                 <Button text="Pay" bgColor={COLORS.lightGreen} width="100px" icon="edit" class="btn btn-success" onClick={this.HandleClick}/>
            </div>
        );
    }
}
