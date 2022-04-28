import {IsMissionDataInterface} from "../../libs/context/Interface";

function MissionCard({ missionData }: IsMissionDataInterface) {

    const missionImage = require("../images/" + missionData.image);
     return (
        <div className="mission-card">
            <img src={missionImage} alt="mission image" className="mission-card--image"/>
            <h2 className="mission-card__title">{missionData.title}</h2>
            <p className="mission-card__description">{missionData.descr}</p>
            <button className="mission-card__button">Plus</button>
        </div>
    )
}

export default MissionCard;