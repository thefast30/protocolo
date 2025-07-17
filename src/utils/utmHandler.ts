// Utilitário para capturar e gerenciar parâmetros UTM
export class UTMHandler {
  private utmParams: URLSearchParams;
  
  constructor() {
    this.utmParams = new URLSearchParams();
    this.captureUTMParams();
  }
  
  private captureUTMParams(): void {
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
    
    utmKeys.forEach(key => {
      const value = urlParams.get(key);
      if (value) {
        this.utmParams.append(key, value);
        // Salvar no localStorage para persistir durante a sessão
        localStorage.setItem(`utm_${key}`, value);
      }
    });
    
    // Também verificar localStorage para parâmetros salvos anteriormente
    utmKeys.forEach(key => {
      const savedValue = localStorage.getItem(`utm_${key}`);
      if (savedValue && !this.utmParams.has(key)) {
        this.utmParams.append(key, savedValue);
      }
    });
  }
  
  public getUTMString(): string {
    return this.utmParams.toString();
  }
  
  public getCheckoutUrl(baseUrl: string): string {
    const utmString = this.getUTMString();
    if (utmString) {
      const separator = baseUrl.includes('?') ? '&' : '?';
      return `${baseUrl}${separator}${utmString}`;
    }
    return baseUrl;
  }
  
  public logUTMParams(): void {
    console.log('UTM Parameters captured:', Object.fromEntries(this.utmParams));
  }
}