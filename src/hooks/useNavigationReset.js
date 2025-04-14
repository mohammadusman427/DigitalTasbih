import {useNavigation} from '@react-navigation/native';

const useNavigationReset = () => {
  const navigation = useNavigation();

  const resetNavigation = (routeName, params = {}) => {
    navigation.reset({
      index: 0,
      routes: [{name: routeName, params}],
    });
  };

  return resetNavigation;
};

export default useNavigationReset;
