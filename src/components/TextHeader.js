import React, { Component } from 'react';



class TextHeader extends Component {
    render() {
        const { children ,color} = this.props;
        
        let selectcolorneon = "neon "+color;
        let selectcolorlight = "light "+color;
        //console.log(selectcolorneon +" " + selectcolorlight)

        return (
            <div>
                <div className={selectcolorneon} >{children}</div>
                <div className={selectcolorlight}> </div>

            </div>
            
        );
    }
}

export default TextHeader;