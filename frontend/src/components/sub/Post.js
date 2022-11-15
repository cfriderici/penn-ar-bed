
// My Components
import { StyledH3} from "../styled/StyledHeadlines";

// External Components 
import styled from "styled-components";
import { Fragment } from "react";
import { FaLifeRing, FaRegCompass, FaDharmachakra, FaFish, FaSwimmer, FaUmbrellaBeach, FaCalendarAlt, FaComment, FaCommentDots, FaComments, FaRegHeart, FaRegShareSquare, FaRegStar, FaUserCircle, FaRegPlusSquare, FaWineBottle } from "react-icons/fa";



// ------ INSIDE COMPONENTS ------  //
const PostHeader = ({ place, date })  => {
    return  (
        <StyledPostHeader>

            <div className="header_img">
                <img className="post-img" src={ require('../../img/FullSizeRender.JPG') } alt=""/>
                <img className="profile-img" src={ require('../../img/IMG_3115.jpg') } alt=""/>
            </div>

            <div>{place}place</div>
            <div>{date}date</div> 

        </StyledPostHeader>
    )
}

const PostContent = ({ title, text })  => {
    return  (
        <StyledPostContent>
            <StyledH3>{title}Title</StyledH3>
            <div>{text}Text</div>
        </StyledPostContent>
    )
}

const PostActions = ({ comment, like, bookmark })  => {
    return  (
        <StyledPostActions>

        <div>
            <FaRegShareSquare />
            <FaComment />
            <FaRegHeart />
        </div>

        <FaRegStar />

        </StyledPostActions>
    )
}


// ------ COMPONENT ------  //
const Post = ({ title, text, userId, userName } ) => {
    return (
        <StyledPostWrapper>

            <PostHeader />
            <PostContent />
            <PostActions />

        </StyledPostWrapper>
    )
}

export default Post;


// ------ STYLED COMPONENTS ------  //
const StyledPostWrapper = styled.div`
    background-color: rgba(0, 250, 0, 0.2);
    margin-bottom: 20px;
`

const StyledPostHeader = styled.div`
    background-color: rgba(0, 250, 0, 0.2);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: small;

    .header_img {
        position: relative;

        .post-img {
            width: 100%;
        }
        .profile-img {
            position: absolute;
            top: 5%;
            right: 5%;
            width: 25%;
            border-radius: 50%;
            border: 3px solid white;
        }
    }
`

const StyledPostContent = styled.div`
    background-color: rgba(0, 250, 0, 0.2);
`

const StyledPostActions = styled.div`
    background-color: rgba(0, 250, 0, 0.2);
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    font-size: large;

    > div svg {
        margin-right: 10px;
    }
`