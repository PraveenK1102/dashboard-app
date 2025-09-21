import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import countries from 'world-countries';

const LocationChart: React.FC = () => {
  const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';
  const raw = [
    { country: 'United States', city: 'New York', value: 72000, coords: [-74.0060, 40.7128] },
    { country: 'United States', city: 'San Francisco', value: 39000, coords: [-122.4194, 37.7749] },
    { country: 'Australia', city: 'Sydney', value: 25000, coords: [151.2093, -33.8688] },
    { country: 'Singapore', city: 'Singapore', value: 61000, coords: [103.8198, 1.3521] },
    { country: 'India', city: 'Tamil Nadu', value: 22000, coords: [80.2707, 13.0827] },
    { country: 'India', city: 'Jammu and Kashmir', value: 18000, coords: [74.7973, 34.0837] }
  ];

  const nameToCoords: Record<string, [number, number]> = {};
  countries.forEach((c: any) => {
    const [lat, lng] = c.latlng || [];
    if (typeof lat === 'number' && typeof lng === 'number') {
      nameToCoords[c.name.common] = [lng, lat];
    }
  });

  const points = raw.map((r: any) => ({
    city: r.city,
    value: r.value,
    coords: r.coords ? (r.coords as [number, number]) : (nameToCoords[r.country] || [0, 0])
  }));

  const { isDark } = useTheme();
  return (
    <div
      className="rounded-lg h-full bg-white dark:bg-gray-800 flex flex-col items-center justify-center"
      style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#F7F9FB' }}
    >
      <span className="text-14 font-semibold text-black-100 dark:text-white pt-3">Revenue by Location</span>
      
      <div className="rounded-lg overflow-hidden w-full" style={{ backgroundColor: 'transparent' }}>
        <ComposableMap projectionConfig={{ scale: 160, center: [0, 12] }} style={{ width: '100%', height: 170 }}>
          <Geographies geography={GEO_URL}>
            {({ geographies }: { geographies: any[] }) =>
              geographies
                .filter((geo: any) => {
                  const props = geo.properties || {};
                  const name = props.name || props.NAME || props.ADMIN || '';
                  return name !== 'Antarctica' && geo.id !== 'ATA';
                })
                .map((geo: any) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: { fill: '#DFE8F2', stroke: '#FFFFFF', strokeWidth: 0.5 },
                    hover: { fill: '#DFE8F2' },
                    pressed: { fill: '#DFE8F2' }
                  }}
                />
              ))
            }
          </Geographies>
          {points.map(p => (
            <Marker key={p.city} coordinates={p.coords}>
              <circle r={15} fill="#1C1C1C" stroke="#fff" strokeWidth={5 } />
            </Marker>
          ))}
        </ComposableMap>
      </div>
      <div className="space-y-4 px-5 pb-3 w-full">
        {points.slice(0,4).map((p) => (
          <div key={p.city}>
            <div className="flex items-center justify-between text-xs">
              <span className="text-black-100 dark:text-white">{p.city}</span>
              <span className="text-black-100 dark:text-white font-semibold">{Math.round(p.value/1000)}K</span>
            </div>
            <div className="h-1 mt-2 rounded" style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : '#E9F0F6' }}>
              <div className="h-1 rounded" style={{ width: `${(p.value/Math.max(...points.slice(0,4).map(x=>x.value)))*100}%`, backgroundColor: '#A8C5DA' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationChart;