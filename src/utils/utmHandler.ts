// Utilitário para capturar e gerenciar parâmetros UTM
export class UTMHandler {
  private utmParams: URLSearchParams;
  
  constructor() {
    this.utmParams = new URLSearchParams();
    this.captureUTMParams();
  }
  
  private captureUTMParams(): void {
    console.log('🔄 UTMHandler: Iniciando captura...');
    const urlParams = new URLSearchParams(window.location.search);
    const utmKeys = [
      'utm_source', 
      'utm_medium', 
      'utm_campaign', 
      'utm_term', 
      'utm_content', 
      'click_id', 
      'fbclid', 
      'gclid',
      'src',
      'sck'
    ];
    
    let foundInUrl = 0;
    let foundInStorage = 0;
    
    utmKeys.forEach(key => {
      const value = urlParams.get(key);
      if (value) {
        this.utmParams.append(key, value);
        // Salvar em ambos os storages para máxima persistência
        localStorage.setItem(`utm_${key}`, value);
        sessionStorage.setItem(`utm_${key}`, value);
        foundInUrl++;
        console.log(`🎯 UTM da URL: ${key} = ${value}`);
      }
    });
    
    // Verificar localStorage E sessionStorage para parâmetros salvos
    utmKeys.forEach(key => {
      const savedValue = localStorage.getItem(`utm_${key}`) || sessionStorage.getItem(`utm_${key}`);
      if (savedValue && !this.utmParams.has(key)) {
        this.utmParams.append(key, savedValue);
        foundInStorage++;
        console.log(`💾 UTM do storage: ${key} = ${savedValue}`);
      }
    });
    
    console.log(`📈 UTMs encontradas - URL: ${foundInUrl}, Storage: ${foundInStorage}`);
  }
  
  public getUTMString(): string {
    const utmString = this.utmParams.toString();
    console.log('🔗 String UTM final:', utmString);
    return utmString;
  }
  
  public getCheckoutUrl(baseUrl: string): string {
    const utmString = this.getUTMString();
    console.log('🛒 Construindo URL de checkout...');
    console.log('📍 Base URL:', baseUrl);
    console.log('🏷️ UTM String:', utmString);
    
    if (utmString) {
      const separator = baseUrl.includes('?') ? '&' : '?';
      const finalUrl = `${baseUrl}${separator}${utmString}`;
      console.log('✅ URL final:', finalUrl);
      return finalUrl;
    }
    
    console.log('⚠️ Nenhuma UTM encontrada, usando URL base');
    return baseUrl;
  }
  
  public logUTMParams(): void {
    console.log('📊 UTM Parameters captured:', Object.fromEntries(this.utmParams));
    console.log('💾 LocalStorage UTMs:', this.getStorageUTMs('localStorage'));
    console.log('🔄 SessionStorage UTMs:', this.getStorageUTMs('sessionStorage'));
  }
  
  private getStorageUTMs(storageType: 'localStorage' | 'sessionStorage'): Record<string, string> {
    const storage = storageType === 'localStorage' ? localStorage : sessionStorage;
    const utms: Record<string, string> = {};
    
    for (let i = 0; i < storage.length; i++) {
      const key = storage.key(i);
      if (key && key.startsWith('utm_')) {
        utms[key] = storage.getItem(key) || '';
      }
    }
    
    return utms;
  }
}