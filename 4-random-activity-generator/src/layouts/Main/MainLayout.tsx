import { useEffect, useState } from 'react';
import ActivityCard from '../../components/ActivityCard/ActivityCard';
import styles from './mainLayout.module.scss';
import Footer from '../../components/Footer/Footer';
import Button, { ButtonAppearance, ButtonIcon, ButtonText } from '../../components/Button/Button';
import Checkbox from '../../components/Checkbox/Checkbox';
import { ActivityImage } from '../../components/ActivityCard/helpers';

interface Activity {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;
}

const MainLayout = () => {
  const [data, setData] = useState<Activity[]>([]);
  const [currentActivity, setCurrentActivity] = useState<Activity | null>(null);
  const [isAccessible, setIsAccessible] = useState<boolean>(false);

  const fetchActivity = async () => {
    const response = await fetch('http://localhost:3002/activities');
    const data: Activity[] = await response.json();
    setData(data);
  }

  useEffect(() => {
    fetchActivity();
  }, [])

  useEffect(() => {
    if (data.length > 0) {
      setCurrentActivity(getRandomActivity(data, isAccessible))
    }
  }, [data])

  const getRandomActivity = (activities: Activity[], accessible: boolean): Activity => {
    const filteredData = accessible ? activities.filter(activity => activity.accessibility < 0.5) : activities;

    const randomIndex = Math.floor(Math.random() * filteredData.length);
    return filteredData[randomIndex];
  }

  const getActivityImage = (type: string): ActivityImage => {
    switch (type) {
      case 'busywork':
        return ActivityImage.Busywork;
      case 'charity':
        return ActivityImage.Charity;
      case 'cooking':
        return ActivityImage.Cooking;
      case 'diy':
        return ActivityImage.Diy;
      case 'education':
        return ActivityImage.Education;
      case 'music':
        return ActivityImage.Music;
      case 'recreational':
        return ActivityImage.Recreational;
      case 'relaxation':
        return ActivityImage.Relaxation;
      case 'social':
        return ActivityImage.Social;
      default:
        return ActivityImage.Busywork;
    }
  }

  const getActivityCard = (activity: Activity | null) => {
    if (!activity) {
      return null;
    }

    let priceIndicator = '';
    if (activity.price === 0) {
      priceIndicator = 'Free';
    } else if (activity.price >= 0.01 && activity.price <= 0.49) {
      priceIndicator = 'Possibly Free';
    } else if (activity.price >= 0.5 && activity.price <= 1) {
      priceIndicator = 'Potential Charge';
    }

    const getAccessibilityIndicator = (accessibility: number) => {
      if (accessibility === 0) {
        return 'Very Accessible';
      } else if (accessibility >= 0.1 && accessibility <= 0.49) {
        return 'Possibly Accessible';
      } else if (accessibility >= 0.5 && accessibility <= 1) {
        return 'Not Accessible';
      }
      return '';
    }

    return (
      <>
        <ActivityCard
          title={activity.activity}
          category={activity.type}
          participants={activity.participants}
          price={priceIndicator}
          accessibility={getAccessibilityIndicator(activity.accessibility)}
          img={getActivityImage(activity.type)}
          link={activity.link}
        />
      </>
    )
  }

  const handleCheckBoxChange = (isChecked: boolean) => {
    setIsAccessible(isChecked)
  };

  const handleGenerateButtonClick = () => {
    setCurrentActivity(getRandomActivity(data, isAccessible))
  };

  return (
    <div className={styles.container}>
      <main className={styles.mainWrapper}>
        <section className={styles.activityParams}>
          <Checkbox label='Accessible Activities' id='accessible-activities' onCheckChange={handleCheckBoxChange} />
          <Button text={ButtonText.GENERATENEW} appearance={ButtonAppearance.GENERATE} icon={ButtonIcon.SEARCH} onClick={handleGenerateButtonClick} />
        </section>
        {getActivityCard(currentActivity)}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout