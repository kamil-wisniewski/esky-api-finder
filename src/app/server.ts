export class Server{
  private api_Key='wi545398427247474642836326894171';
  private api_Key1='wi54539842724747';
  private api='http://partners.api.skyscanner.net/apiservices/xd/';
  private code='v1.0/PL/PLN/pl-PL/';

  getKey()
  {
    return this.api_Key;
  }

  getApiEndPoint()
  {
    return this.api;
  }
  getCode()
  {
    return this.code;
  }

}