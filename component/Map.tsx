import { MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const icon = L.icon({
    iconUrl: "/images/location-pin.png",
    iconSize: [40, 40]
})
const polyline:[number,number][] = [
    [49.25299, -123.00600],
    [49.25980, -123.01400],
    [49.25299, -123.04400]
]
const multipolyline: [number,number][][] = [
   [
    [49.25299, -123.00800],
    [49.25980, -123.03300],
    [49.25299, -123.07400]
   ],
   [
    [49.25299, -123.00800],
    [49.25555, -123.03300],
    [49.25777, -123.07400]
   ]
]
const redOptions = { color: 'red' }
const orangeOptions = { color: 'orange' }
const fillBlueOptions = { color: 'blue' }

const center:[number,number] = [49.25299,-123.00600]
const Map = () => {
    return (
        <MapContainer
            style={{ height: "100vh" }}
            center={[49.24966, -123.00934]} zoom={14} scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://github.com/raxron/leaflet">By Rachel Xia</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[49.24966, -123.00934]} icon={icon}>
                <Popup>
                    BCIT
                </Popup>
            </Marker>
            <Polyline pathOptions={redOptions} positions={polyline} />
            <Polyline pathOptions={orangeOptions} positions={multipolyline} />
            <Circle center={center} pathOptions={fillBlueOptions} radius={200}/>
            <CircleMarker
                center={[49.25299,-123.01650]} pathOptions={redOptions} radius={20}>
                        <Popup>Popup in CircleMarker</Popup>
                </CircleMarker>
        </MapContainer>
    )
}

export default Map;
