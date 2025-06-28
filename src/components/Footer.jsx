import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="text-light-gray relative">
      {/* Image Gallery - Hidden on small screens, merges with above section */}
      <div className="hidden md:block absolute bottom-full">
        <div className="grid grid-cols-7 gap-0 items-end">
          {/* Column 1 - Tall */}
          <div className="h-48">
            <img 
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=600&fit=crop&crop=face" 
              alt="Fashion portrait"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Column 2 - Medium */}
          <div className="h-64">
            <img 
              src="https://images.unsplash.com/photo-1506629905687-c9a4de01e940?w=400&h=500&fit=crop&crop=face" 
              alt="Portrait photography"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Column 3 - Short */}
          <div className="h-48">
            <img 
              src="https://images.unsplash.com/photo-1539571696557-407f5635b724?w=400&h=400&fit=crop&crop=center" 
              alt="Creative setup"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Column 4 - Extra Tall */}
          <div className="h-80">
            <img 
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=700&fit=crop&crop=face" 
              alt="Fashion model"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Column 5 - Medium */}
          <div className="h-60">
            <img 
              src="https://images.unsplash.com/photo-1445384763658-0400939829cd?w=400&h=500&fit=crop&crop=center" 
              alt="Creative art"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Column 6 - Tall */}
          <div className="h-72">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face" 
              alt="Portrait"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Column 7 - Short */}
          <div className="h-48">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=450&fit=crop&crop=center" 
              alt="Creative workspace"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="bg-dark-blue">

      <div className="px-6 py-12 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6 text-white uppercase tracking-wider">
              {t('footer.newsletter')}
            </h3>
            <div className="flex">
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="flex-1 bg-transparent border-b-2 border-grayish-teal py-2 px-0 text-light-gray placeholder-grayish-teal focus:border-light-gray focus:outline-none"
              />
              <button className="ml-4 text-light-gray hover:text-white transition-colors">
                <ArrowRight size={24} />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 col-span-1 lg:col-span-3 gap-8">
            {/* First Column */}
            <div>
              <nav className="space-y-3">
                <a href="#" className="block text-light-gray hover:text-white transition-colors uppercase text-sm font-medium">
                  {t('footer.nav.home')}
                </a>
                <a href="#" className="block text-light-gray hover:text-white transition-colors uppercase text-sm font-medium">
                  {t('footer.nav.works')}
                </a>
                <a href="#" className="block text-light-gray hover:text-white transition-colors uppercase text-sm font-medium">
                  {t('footer.nav.about')}
                </a>
                <a href="#" className="block text-light-gray hover:text-white transition-colors uppercase text-sm font-medium">
                  {t('footer.nav.studio')}
                </a>
                <a href="#" className="block text-light-gray hover:text-white transition-colors uppercase text-sm font-medium">
                  {t('footer.nav.contact')}
                </a>
              </nav>
            </div>

            {/* Second Column */}
            <div className="">
                <nav className="space-y-3">
                  <a href="#" className="block text-light-gray hover:text-white transition-colors uppercase text-sm font-medium">
                    {t('footer.social.instagram')}
                  </a>
                  <a href="#" className="block text-light-gray hover:text-white transition-colors uppercase text-sm font-medium">
                    {t('footer.social.tiktok')}
                  </a>
                  <a href="#" className="block text-light-gray hover:text-white transition-colors uppercase text-sm font-medium">
                    {t('footer.social.youtube')}
                  </a>
                  <a href="#" className="block text-light-gray hover:text-white transition-colors uppercase text-sm font-medium">
                    {t('footer.social.vimeo')}
                  </a>
                  <a href="#" className="block text-light-gray hover:text-white transition-colors uppercase text-sm font-medium">
                    {t('footer.social.facebook')}
                  </a>
                  <a href="#" className="block text-light-gray hover:text-white transition-colors uppercase text-sm font-medium">
                    {t('footer.social.linkedin')}
                  </a>
                </nav>
            </div>

            {/* Third Column */}
            <div className="">
                <nav className="space-y-3">
                  <a href="#" className="block text-light-gray hover:text-white transition-colors uppercase text-sm font-medium">
                    {t('footer.social.instagram')}
                  </a>
                  <a href="#" className="block text-light-gray hover:text-white transition-colors uppercase text-sm font-medium">
                    {t('footer.social.tiktok')}
                  </a>
                  <a href="#" className="block text-light-gray hover:text-white transition-colors uppercase text-sm font-medium">
                    {t('footer.social.youtube')}
                  </a>
                  <a href="#" className="block text-light-gray hover:text-white transition-colors uppercase text-sm font-medium">
                    {t('footer.social.vimeo')}
                  </a>
                  <a href="#" className="block text-light-gray hover:text-white transition-colors uppercase text-sm font-medium">
                    {t('footer.social.facebook')}
                  </a>
                  <a href="#" className="block text-light-gray hover:text-white transition-colors uppercase text-sm font-medium">
                    {t('footer.social.linkedin')}
                  </a>
                </nav>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-blue">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <p className="text-grayish-teal text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-grayish-teal hover:text-white transition-colors text-sm">
                {t('footer.legal.privacy')}
              </a>
              <a href="#" className="text-grayish-teal hover:text-white transition-colors text-sm">
                {t('footer.legal.terms')}
              </a>
              <a href="#" className="text-grayish-teal hover:text-white transition-colors text-sm">
                {t('footer.legal.termsOfUse')}
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;