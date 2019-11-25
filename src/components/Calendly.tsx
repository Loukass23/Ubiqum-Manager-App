import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";

interface Props {
    mentors: Mentors
}

const Calendly: React.FC<Props> = ({ mentors }) => {

    useEffect(() => {

        const head = document.querySelector('head');
        if (head) {
            const script = document.createElement('script');
            script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
            head.appendChild(script);
        }
    }, []);

    return (

        <div id="schedule_form">
            {
                mentors.map((mentor: Mentor) => (


                    <div key={mentor.email}
                        className="calendly-inline-widget"
                        data-url={mentor.calendly}
                        style={{ minWidth: '320px', height: '580px' }} />


                ))

            }

        </div>


    );
}


export default Calendly

