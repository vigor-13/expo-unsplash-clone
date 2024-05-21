import * as Application from 'expo-application';
// import Constants from 'expo-constants';

export const useApplication = () => {
  const applicationName = Application.applicationName;
  const applicationVersion = Application.nativeApplicationVersion;
  const nativeBuildVersion = Application.nativeBuildVersion;

  return {
    applicationName,
    applicationVersion,
    nativeBuildVersion,
  };
};
