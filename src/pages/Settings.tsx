import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  PaintBrushIcon, 
  BellIcon, 
  KeyIcon,
  UserIcon
} from '@heroicons/react/24/outline';

interface SettingSection {
  title: string;
  icon: React.ElementType;
  items: {
    title: string;
    description: string;
    type: 'toggle' | 'select' | 'button';
    options?: string[];
  }[];
}

const Settings = () => {
  const settings: SettingSection[] = [
    {
      title: 'Security',
      icon: ShieldCheckIcon,
      items: [
        {
          title: 'Two-Factor Authentication',
          description: 'Add an extra layer of security to your account',
          type: 'toggle',
        },
        {
          title: 'Biometric Login',
          description: 'Use fingerprint or face recognition to sign in',
          type: 'toggle',
        },
        {
          title: 'Change Password',
          description: 'Update your account password',
          type: 'button',
        },
      ],
    },
    {
      title: 'Appearance',
      icon: PaintBrushIcon,
      items: [
        {
          title: 'Theme',
          description: 'Choose your preferred color scheme',
          type: 'select',
          options: ['Cyberpunk', 'Neon', 'Holographic'],
        },
        {
          title: 'Animation Speed',
          description: 'Adjust the speed of UI animations',
          type: 'select',
          options: ['Fast', 'Normal', 'Slow'],
        },
      ],
    },
    {
      title: 'Notifications',
      icon: BellIcon,
      items: [
        {
          title: 'Email Notifications',
          description: 'Receive updates about your account',
          type: 'toggle',
        },
        {
          title: 'Push Notifications',
          description: 'Get instant alerts on your device',
          type: 'toggle',
        },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-cyber-gray/50 p-6 rounded-lg"
      >
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-cyber-blue/10 rounded-full flex items-center justify-center">
            <UserIcon className="w-8 h-8 text-cyber-blue" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">User Profile</h2>
            <p className="text-gray-400">Manage your account settings</p>
          </div>
        </div>
      </motion.div>

      {/* Settings Sections */}
      {settings.map((section, sectionIndex) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: sectionIndex * 0.1 }}
          className="bg-cyber-gray/50 p-6 rounded-lg"
        >
          <div className="flex items-center space-x-3 mb-6">
            <section.icon className="w-6 h-6 text-cyber-blue" />
            <h2 className="text-xl font-semibold">{section.title}</h2>
          </div>

          <div className="space-y-6">
            {section.items.map((item, itemIndex) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: sectionIndex * 0.1 + itemIndex * 0.05 }}
                className="flex items-center justify-between"
              >
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>

                {item.type === 'toggle' && (
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-cyber-gray transition-colors focus:outline-none">
                    <span className="sr-only">{item.title}</span>
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" />
                  </button>
                )}

                {item.type === 'select' && (
                  <select className="bg-cyber-gray border border-cyber-blue/20 rounded-lg px-3 py-1 text-sm focus:outline-none focus:border-cyber-blue">
                    {item.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                )}

                {item.type === 'button' && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-cyber-blue/10 text-cyber-blue rounded-lg hover:bg-cyber-blue/20 transition-colors"
                  >
                    Change
                  </motion.button>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Settings; 