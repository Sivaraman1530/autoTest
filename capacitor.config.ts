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
      "autoDeleteFailed": true,
      "autoDeletePrevious": true,
			"autoUpdate": false,
      "version":6.0,
      "defaultChannel": "production"
		}
	}
};

export default config;
