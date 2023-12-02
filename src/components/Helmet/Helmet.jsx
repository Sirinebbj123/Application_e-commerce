import React from "react";

class Helmet extends React.Component {
    render() {
        document.title = 'artisanat_' + this.props.title;
        return (
            <div className="w-100">
                {this.props.children}
            </div>
        );
    }
}

export default Helmet;
