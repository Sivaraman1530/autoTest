import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.test',
  appName: 'test',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
		"CapacitorUpdater": {
			"autoUpdate": false,
		}
	}
};

export default config;
