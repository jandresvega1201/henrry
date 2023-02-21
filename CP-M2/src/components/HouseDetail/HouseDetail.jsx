import React from "react";
import { useDispatch } from "react-redux";
import { getHouse } from "../../redux/actions";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import CharacterCard from "../CharacterCard/CharacterCard";

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
const HouseDetail = (props) => {
    const { param } = useParams();
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getHouse(param));
    }, [dispatch, param]);

    const house = useSelector((state) => state.house);

    return (
        <div>
            {house &&
                house.characters?.map((elem) => (
                    <div>
                        <CharacterCard
                            id={elem.id}
                            fullName={elem.fullName}
                            title={elem.title}
                            family={elem.family}
                            imageUrl={elem.imageUrl}
                            houseId={elem.houseId}
                        />
                    </div>
                ))}

            {house.name}
            {house.words}
        </div>
    );
};

export default HouseDetail;
