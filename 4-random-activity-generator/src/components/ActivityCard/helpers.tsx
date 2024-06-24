import BusyWorkImg from '../../assets/images/busywork.png';
import CharityImg from '../../assets/images/charity.png';
import CookingImg from '../../assets/images/cooking.png';
import DiyImg from '../../assets/images/diy.png';
import EducationImg from '../../assets/images/education.png';
import MusicImg from '../../assets/images/music.png';
import RecreationalImg from '../../assets/images/recreational.png';
import RelaxationImg from '../../assets/images/relaxation.png';
import SocialImg from '../../assets/images/social.png';

export enum ActivityImage {
    Busywork = 'busywork',
    Charity = 'charity',
    Cooking = 'cooking',
    Diy = 'diy',
    Education = 'education',
    Music = 'music',
    Recreational = 'recreational',
    Relaxation = 'relaxation',
    Social = 'social',

}

export const renderImage = (img: ActivityImage) => {
    switch (img) {
        case ActivityImage.Busywork:
            return <img src={BusyWorkImg} alt="Busywork" />;
        case ActivityImage.Charity:
            return <img src={CharityImg} alt="Charity" />;
        case ActivityImage.Cooking:
            return <img src={CookingImg} alt="Cooking" />;
        case ActivityImage.Diy:
            return <img src={DiyImg} alt="Diy" />;
        case ActivityImage.Education:
            return <img src={EducationImg} alt="Education" />;
        case ActivityImage.Music:
            return <img src={MusicImg} alt="Music" />;
        case ActivityImage.Recreational:
            return <img src={RecreationalImg} alt="Recreational" />;
        case ActivityImage.Relaxation:
            return <img src={RelaxationImg} alt="Relaxation" />;
        case ActivityImage.Social:
            return <img src={SocialImg} alt="Social" />;
        default:
            return null;
    }
}