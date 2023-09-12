import { CSSProperties } from 'react';
import L from 'leaflet';
import { renderToString } from 'react-dom/server';
import { Typography } from 'antd';
import { BoatInfoIcon, CarInfoIcon, MainStationIcon, VirtualStationIcon } from 'icons';
import { ButtonStatePalette, ColorPalette, MainPalette } from './colors';

const { Title } = Typography;

export const GOOGLE_STREET_MAP_LAYER = 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}';
export const GOOGLE_DIRECTION_LAYER = 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}';

const textSize14: CSSProperties = {
  fontSize: 14,
  lineHeight: 20 / 14,
};

const textSize12: CSSProperties = {
  fontSize: 12,
  lineHeight: 16 / 12,
};

const stationNameStyles: CSSProperties = {
  color: `${ColorPalette.WHITE}`,
  fontWeight: 400,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitTextStroke: '0.5px black',
};

const backgroundOutsideStyles: CSSProperties = {
  padding: 2,
  borderRadius: 1000,
  width: 'fit-content',
  margin: 'auto',
};

const renderStationName = (type: 'main' | 'virtual', name: string) => {
  if (type === 'main')
    return (
      <Title
        title={name}
        style={{
          ...stationNameStyles,
          ...textSize14,
          marginBottom: 4,
        }}
      >
        {name}
      </Title>
    );
  return (
    <Title
      title={name}
      style={{
        ...stationNameStyles,
        ...textSize12,
        marginBottom: 2,
      }}
    >
      {name}
    </Title>
  );
};

const renderBoatPower = (color: string, content: string) => (
  <div
    style={{
      ...backgroundOutsideStyles,
      backgroundColor: `${color}80`,
    }}
  >
    <div
      style={{
        ...backgroundOutsideStyles,
        backgroundColor: `${color}4D`,
      }}
    >
      <Title
        title={content}
        style={{
          ...backgroundOutsideStyles,
          ...textSize12,
          fontWeight: 500,
          backgroundColor: color,
          color: `${ColorPalette.WHITE}`,
          paddingInline: 6,
        }}
      >
        {content}
      </Title>
    </div>
  </div>
);

const renderOnDutyVehicle = (onDutyVehicleQuantity: number) => {
  const color = MainPalette.CERULEAN_SECONDARY;
  const totalOnDutyVehicle = `${onDutyVehicleQuantity} phương tiện`;

  return (
    <div
      style={{
        ...backgroundOutsideStyles,
        backgroundColor: `${color}4D`,
      }}
    >
      <div
        style={{
          ...backgroundOutsideStyles,
          backgroundColor: `${color}80`,
        }}
      >
        <div
          style={{
            ...backgroundOutsideStyles,
            backgroundColor: `${color}`,
          }}
        >
          <Title
            title={totalOnDutyVehicle}
            style={{
              ...backgroundOutsideStyles,
              ...textSize14,
              fontWeight: 700,
              backgroundColor: `${ColorPalette.WHITE}`,
              color: `${color}`,
              paddingInline: 8,
            }}
          >
            {totalOnDutyVehicle}
          </Title>
        </div>
      </div>
    </div>
  );
};

export const customMainMarker = (
  name?: string,
  color = `${ButtonStatePalette.PRIMARY_STANDARD}`,
  vehicleQuantity?: number,
) =>
  L.divIcon({
    iconSize: [name ? 144 : 48, 48],
    iconAnchor: name ? [72, 70] : [24, 48],
    html: renderToString(
      <>
        {name && renderStationName('main', name)}
        <MainStationIcon fill={color} />
        {vehicleQuantity && renderOnDutyVehicle(vehicleQuantity)}
      </>,
    ),
  });

export const customVirtualMaker = (name?: string) =>
  L.divIcon({
    iconSize: [name ? 112 : 28, 28],
    iconAnchor: name ? [56, 37] : [16, 20],
    html: renderToString(
      <>
        {name && renderStationName('virtual', name)}
        <VirtualStationIcon />
      </>,
    ),
  });

export const customTramMaker = (outsideColor: string, insideColor: string, percent: number) =>
  L.divIcon({
    iconSize: [48, 48],
    iconAnchor: [24, 48],
    html: renderToString(
      <CarInfoIcon outsideColor={outsideColor} insideColor={insideColor} percent={percent} />,
    ),
  });

export const customBoatMaker = (color: string, id: string, percent: string) => {
  const boatInfoText = `${id} | ${percent}`;

  return L.divIcon({
    iconSize: [boatInfoText ? 144 : 48, 48],
    iconAnchor: boatInfoText ? [72, 70] : [24, 48],
    html: renderToString(
      <>
        <BoatInfoIcon fill={color} />
        {renderBoatPower(color, boatInfoText)}
      </>,
    ),
  });
};
