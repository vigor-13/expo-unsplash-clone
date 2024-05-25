import React from 'react';
import RN from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Navigation from '@react-navigation/native';
import { IconMapPin } from '@tabler/icons-react-native';
import { RootStackParamList } from '@/routes/components';
import { Divider, Text, tokens } from '@/ui';
import { useGetPhoto, useHeader } from '@/hooks';
import { dateFromNow, displayText } from '@/libs';
import { Header } from '@/components/sections/headers/Header';
import { HeaderTextButton } from '@/components/blocks/HeaderTextButton';
type RouteProps = Navigation.RouteProp<RootStackParamList, 'PhotoInfoScreen'>;

export const PhotoInfoScreen: React.FC = () => {
  useHeader({
    header: () => (
      <Header title="정보" headerLeft={<HeaderTextButton text="닫기" />} />
    ),
  });

  const routeProps = Navigation.useRoute<RouteProps>();
  const id = routeProps.params.id;
  const { data } = useGetPhoto(id);
  const hasLocationData =
    data && data.location.position.latitude && data.location.position.longitude
      ? true
      : false;

  return (
    data && (
      <RN.View style={styles.container}>
        {hasLocationData && (
          <>
            <MapView
              userInterfaceStyle="dark"
              style={styles.map}
              initialRegion={{
                latitude: data.location.position.latitude,
                longitude: data.location.position.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker coordinate={data.location.position} />
            </MapView>
            <RN.View style={styles.countryNameContainer}>
              <IconMapPin color={tokens.st.color.white} size={16} />
              <Text style={styles.contentText}>{`${data.location.name}`}</Text>
            </RN.View>
            <Divider style={styles.divider} />
          </>
        )}
        <RN.View style={styles.sectionContainer}>
          <Text style={styles.sectionTitleText}>카메라</Text>
          <RN.View style={styles.sectionContentContainer}>
            <RN.View style={styles.contentContainer}>
              <Text style={styles.subjectText}>제조사</Text>
              <Text style={styles.contentText}>
                {displayText(data.exif.make)}
              </Text>
            </RN.View>
            <RN.View style={styles.contentContainer}>
              <Text style={styles.subjectText}>초점거리(mm)</Text>
              <Text style={styles.contentText}>
                {displayText(data.exif.focal_length)}
              </Text>
            </RN.View>
            <RN.View style={styles.contentContainer}>
              <Text style={styles.subjectText}>모델명</Text>
              <Text style={styles.contentText}>
                {displayText(data.exif.model)}
              </Text>
            </RN.View>
            <RN.View style={styles.contentContainer}>
              <Text style={styles.subjectText}>ISO</Text>
              <Text style={styles.contentText}>
                {displayText(data.exif.iso)}
              </Text>
            </RN.View>
            <RN.View style={styles.contentContainer}>
              <Text style={styles.subjectText}>셔터 속도(s)</Text>
              <Text style={styles.contentText}>
                {displayText(data.exif.exposure_time)}
              </Text>
            </RN.View>
            <RN.View style={styles.contentContainer}>
              <Text style={styles.subjectText}>크기</Text>
              <Text
                style={styles.contentText}
              >{`${data.width} x ${data.height}`}</Text>
            </RN.View>
            <RN.View style={styles.contentContainer}>
              <Text style={styles.subjectText}>Aperture(f)</Text>
              <Text style={styles.contentText}>
                {displayText(data.exif.aperture)}
              </Text>
            </RN.View>
            <RN.View style={styles.contentContainer}>
              <Text style={styles.subjectText}>게시됨</Text>
              <Text style={styles.contentText}>
                {dateFromNow(data.created_at)}
              </Text>
            </RN.View>
          </RN.View>
        </RN.View>
      </RN.View>
    )
  );
};

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.st.color.neutral[900],
    padding: tokens.st.space[200],
  },
  countryNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: tokens.st.space[150],
    gap: tokens.st.space['075'],
  },
  map: {
    width: '100%',
    height: '24%',
  },
  divider: {
    marginVertical: tokens.st.space[300],
  },
  sectionContainer: {},
  sectionTitleText: {
    fontWeight: tokens.st.font.weight.bold as any,
  },
  sectionContentContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  contentContainer: {
    width: '50%',
    gap: tokens.st.space['025'],
    marginTop: tokens.st.space['200'],
  },
  subjectText: {
    fontSize: tokens.st.font.size.xs,
    color: tokens.st.color.neutral[500],
    fontWeight: tokens.st.font.weight.medium as any,
  },
  contentText: {
    fontSize: tokens.st.font.size.xs,
    fontWeight: tokens.st.font.weight.medium as any,
  },
});
