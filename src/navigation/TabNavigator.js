import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

// Importar las pantallas
import HomeScreen from '../screens/HomeScreen';
import CatalogueScreen from '../screens/CatalogueScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Importar TODOS los íconos al inicio
const icons = {
    home: {
        active: require('../../assets/icons/black/home.png'),
        inactive: require('../../assets/icons/darkgray/home.png'),
    },
    catalogue: {
        active: require('../../assets/icons/black/catalogue.png'),
        inactive: require('../../assets/icons/darkgray/catalogue.png'),
    },
    clipboard: {
        active: require('../../assets/icons/black/clipboard.png'),
        inactive: require('../../assets/icons/darkgray/clipboard.png'),
    },
    user: {
        active: require('../../assets/icons/black/user.png'),
        inactive: require('../../assets/icons/darkgray/user.png'),
    },
    qrCode: {
        active: require('../../assets/icons/black/qr_code.png'),
        inactive: require('../../assets/icons/darkgray/qr_code.png'),
    },
};

// Función helper para renderizar íconos personalizados
const renderTabIcon = (iconName, focused) => {
    const iconSource = focused ? icons[iconName].active : icons[iconName].inactive;
    return (
        <Image 
            source={iconSource} 
            style={{ width: 24, height: 24 }} 
            resizeMode="contain"
        />
    );
};

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#000000',      // Color del texto activo
                tabBarInactiveTintColor: '#555555',    // Color del texto inactivo
                tabBarStyle: {
                    backgroundColor: '#A8B6C2',
                    borderTopWidth: 0,
                    height: 90,
                    paddingBottom: 0,
                    paddingTop: 8,
                    position: 'absolute',          // ← AGREGÁ esto
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                },
                tabBarHideOnKeyboard: true,           // ← AGREGÁ esto (bonus: oculta el tab al escribir)
                safeAreaInsets: {                     // ← AGREGÁ esto
                    bottom: 0,                          // Desactiva el padding automático inferior
                },
                headerStyle: {
                    backgroundColor: '#A8B6C2',          // Color del header
                },
                headerTintColor: '#000000',            // Color del texto del header
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
        <Tab.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
                title: 'Inicio',
                tabBarIcon: ({ focused }) => renderTabIcon('home', focused),
            }}
        />
        
        <Tab.Screen 
            name="Catalogue" 
            component={CatalogueScreen}
            options={{
                title: 'Clases',
                tabBarIcon: ({ focused }) => renderTabIcon('catalogue', focused),
            }}
        />
        
        {/* Tab del QR - Por ahora lo dejamos deshabilitado */}
        <Tab.Screen 
            name="QRScanner" 
            component={HomeScreen}  // Temporalmente apunta a Home
            options={{
                title: 'Escanear',
                tabBarIcon: ({ focused }) => renderTabIcon('qrCode', focused),
                tabBarButton: () => null,  // Esto lo oculta por ahora
            }}
        />
        
        <Tab.Screen 
            name="History" 
            component={HistoryScreen}
            options={{
                title: 'Historial',
                tabBarIcon: ({ focused }) => renderTabIcon('clipboard', focused),
            }}
        />
        
        <Tab.Screen 
            name="Profile" 
            component={ProfileScreen}
            options={{
                title: 'Perfil',
                tabBarIcon: ({ focused }) => renderTabIcon('user', focused),
            }}
        />
        </Tab.Navigator>
    );
}