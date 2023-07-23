const createTemplate = ( name, email, phone, product, message  ) => {
  const products = JSON.parse(product);
  const date = new Date().toLocaleDateString();
  const itemsList = products.map((product) => {
    return (`
    <tr>
    <td style="color: #ccc; font-size: 15px; line-height: 22px; font-weight: 400; word-break: normal; width: 60%; padding-top: 10px;" width="60%"> ${product.name} </td>
    <td style="color: #ccc; font-size: 15px; line-height: 22px; font-weight: 400; word-break: normal; text-align: right; width: 20%;" width="20%" align="right">${product.quantity}</td>
    <td style="color: #ccc; font-size: 15px; line-height: 22px; font-weight: 400; word-break: normal; text-align: right; width: 20%;" width="20%" align="right">${product.part_number}</td>
  </tr>
    `)
  });
  return(`<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en"><head>
    <title> Notificatin [Coded Mails] </title>
    <!--[if !mso]><!-- -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type="text/css">
      #outlook a {
        padding: 0;
      }
  
      body {
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
  
      table,
      td {
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
  
      img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }
  
      p {
        display: block;
        margin: 13px 0;
      }
    </style>
    <!--[if mso]>
          <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
          </xml>
          <![endif]-->
    <!--[if lte mso 11]>
          <style type="text/css">
            .mj-outlook-group-fix { width:100% !important; }
          </style>
          <![endif]-->
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet" type="text/css" />
    <style type="text/css">
      @import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700);
    </style>
    <!--<![endif]-->
    <style type="text/css">
      @media only screen and (min-width:480px) {
        .mj-column-per-100 {
          width: 100% !important;
          max-width: 100%;
        }
  
        .mj-column-per-50 {
          width: 50% !important;
          max-width: 50%;
        }
      }
    </style>
    <style type="text/css">
      @media only screen and (max-width:480px) {
        table.mj-full-width-mobile {
          width: 100% !important;
        }
  
        td.mj-full-width-mobile {
          width: auto !important;
        }
      }
    </style>
    <style type="text/css">
      a,
      span,
      td,
      th {
        -webkit-font-smoothing: antialiased !important;
        -moz-osx-font-smoothing: grayscale !important;
      }
    </style>
  <style><br />                ddg-runtime-checks {<br />                    display: none;<br />                }<br />            </style></head>
  
  <body style="background-color:#f3f3f5;">
    <div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;"> Preview - Notification from Coded Mails </div>
    <div style="background-color:#f3f3f5;">
      <!--[if mso | IE]>
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
        >
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
      <div style="margin:0px auto;max-width:600px;">
        <table role="presentation" style="width:100%;" cellspacing="0" cellpadding="0" border="0" align="center">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  
          <tr>
        
              <td
                 class="" style="vertical-align:top;width:600px;"
              >
            <![endif]-->
                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                  <table role="presentation" style="vertical-align:top;" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody><tr>
                      <td style="font-size:0px;word-break:break-word;">
                        <!--[if mso | IE]>
      
          <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="20" style="vertical-align:top;height:20px;">
        
      <![endif]-->
                        <div style="height:20px;">  </div>
                        <!--[if mso | IE]>
      
          </td></tr></table>
        
      <![endif]-->
                      </td>
                    </tr>
                  </tbody></table>
                </div>
                <!--[if mso | IE]>
              </td>
            
          </tr>
        
                    </table>
                  <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]>
            </td>
          </tr>
        </table>
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
        >
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
      <div style="background:#54595f;background-color:#54595f;margin:0px auto;border-radius:4px 4px 0 0;max-width:600px;">
        <table role="presentation" style="background:#54595f;background-color:#54595f;width:100%;border-radius:4px 4px 0 0;" cellspacing="0" cellpadding="0" border="0" align="center">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  
              <tr>
                <td
                   class="" width="600px"
                >
            
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
        >
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
                <div style="margin:0px auto;max-width:600px;">
                  <table role="presentation" style="width:100%;" cellspacing="0" cellpadding="0" border="0" align="center">
                    <tbody>
                      <tr>
                        <td style="direction:ltr;font-size:0px;padding:0px;text-align:center;">
                          <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  
          <tr>
        
              <td
                 class="" style="vertical-align:top;width:600px;"
              >
            <![endif]-->
                          <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                            <table role="presentation" style="vertical-align:top;" width="100%" cellspacing="0" cellpadding="0" border="0">
                              <tbody><tr>
                                <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="center">
                                  <table role="presentation" style="border-collapse:collapse;border-spacing:0px;" cellspacing="0" cellpadding="0" border="0">
                                    <tbody>
                                      <tr>
                                        <td style="width:150px;">
                                          <img src="https://alpha-limit.com/wp-content/uploads/2022/06/FOOTER-LOGO.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="150" height="auto" />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td style="font-size:0px;word-break:break-word;">
                                  <!--[if mso | IE]>
      
          <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="20" style="vertical-align:top;height:20px;">
        
      <![endif]-->
                                  <div style="height:20px;">   </div>
                                  <!--[if mso | IE]>
      
          </td></tr></table>
        
      <![endif]-->
                                </td>
                              </tr>
                              <tr>
                                <td style="font-size:0px;padding:10px 25px;padding-bottom:0px;word-break:break-word;" align="center">
                                  <div style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:24px;font-weight:400;line-height:30px;text-align:center;color:#ffffff;">
                                    <h1 style="margin: 0; font-size: 24px; line-height: normal; font-weight: 400;">New Order Arrived</h1>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td style="font-size:0px;padding:10px 25px;padding-top:0;word-break:break-word;" align="center">
                                  <div style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;line-height:20px;text-align:center;color:#aaaaaa;">
                                    <p style="margin: 0;">${date}</p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                  <p style="border-top: solid 1px #999999; font-size: 1px; margin: 0px auto; width: 100%;">
                                  </p>
                                  <!--[if mso | IE]>
          <table
             align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #999999;font-size:1px;margin:0px auto;width:550px;" role="presentation" width="550px"
          >
            <tr>
              <td style="height:0;line-height:0;">
                &nbsp;
              </td>
            </tr>
          </table>
        <![endif]-->
                                </td>
                              </tr>
                              <tr>
                                <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="left">
                                  <div style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;line-height:20px;text-align:left;color:#ffffff;">
                                    <p style="margin: 0;">Sender: ${name},<br /> Message: ${message}<br /> Phone: ${phone} </p>
                                    <p style="margin: 0;">Email: <a href="#" style="color: #009BF9; text-decoration: none; word-break: normal;">${email}</a></p>
                                  </div>
                                </td>
                              </tr>
                            </tbody></table>
                          </div>
                          <!--[if mso | IE]>
              </td>
            
          </tr>
        
                    </table>
                  <![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]>
            </td>
          </tr>
        </table>
        
                </td>
              </tr>
            
              <tr>
                <td
                   class="" width="600px"
                >
            
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
        >
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
                <div style="margin:0px auto;max-width:600px;">
                  <table role="presentation" style="width:100%;" cellspacing="0" cellpadding="0" border="0" align="center">
                    <tbody>
                      <tr>
                        <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                          <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  
          <tr>
        
              <td
                 class="" style="vertical-align:top;width:600px;"
              >
            <![endif]-->
                          <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td style="vertical-align:top;padding:0px 25px;">
                                    <table role="presentation" style="background-color:#34393E;" width="100%" cellspacing="0" cellpadding="0" border="0">
                                      <tbody><tr>
                                        <td class="receipt-table" style="font-size:0px;padding:30px;word-break:break-word;" align="left">
                                          <table style="color:#000000;font-family:Roboto, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;table-layout:auto;width:100%;border:none;" width="100%" cellspacing="0" cellpadding="0" border="0">
                                            <tbody><tr>
                                              <th colspan="3" style="font-size: 20px; line-height: 30px; font-weight: 500; color: #fff; padding: 0px 0px 10px 0px; text-align: center; border-bottom: 1px solid #555;" align="center">Order summary </th>
                                            </tr>
                                            ${itemsList}
                                          </tbody></table>
                                        </td>
                                      </tr>
                                    </tbody></table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!--[if mso | IE]>
              </td>
            
          </tr>
        
                    </table>
                  <![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]>
            </td>
          </tr>
        </table>
        
                </td>
              </tr>
            
              <tr>
                <td
                   class="" width="600px"
                >
            
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
        >
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
                <div style="margin:0px auto;max-width:600px;">
                  <table role="presentation" style="width:100%;" cellspacing="0" cellpadding="0" border="0" align="center">
                    <tbody>
                      <tr>
                        <td style="direction:ltr;font-size:0px;padding:0px;text-align:center;">
                          <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  
          <tr>
        
              <td
                 class="" style="width:600px;"
              >
            <![endif]-->
                          <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;">
                            <!--[if mso | IE]>
          <table
             border="0" cellpadding="0" cellspacing="0" role="presentation"
          >
            <tr>
          
                <td
                   style="vertical-align:top;width:300px;"
                >
                <![endif]-->
                            <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;">
                              <table role="presentation" style="vertical-align:top;" width="100%" cellspacing="0" cellpadding="0" border="0">
                                <tbody><tr>
                                  <td vertical-align="middle" style="font-size:0px;padding:10px 25px;word-break:break-word;" align="left">
                                    <table role="presentation" style="border-collapse:separate;line-height:100%;" cellspacing="0" cellpadding="0" border="0">
                                      <tbody>
                                    </tbody></table>
                                  </td>
                                </tr>
                              </tbody></table>
                            </div>
                            <!--[if mso | IE]>
                </td>
                
                <td
                   style="vertical-align:top;width:300px;"
                >
                <![endif]-->
                            <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;">
                              <table role="presentation" style="vertical-align:top;" width="100%" cellspacing="0" cellpadding="0" border="0">
                                <tbody><tr>
                                  <td vertical-align="middle" style="font-size:0px;padding:10px 25px;word-break:break-word;" align="right">
                                    <table role="presentation" style="border-collapse:separate;line-height:100%;" cellspacing="0" cellpadding="0" border="0">
                                      <tbody>
                                    </tbody></table>
                                  </td>
                                </tr>
                              </tbody></table>
                            </div>
                            <!--[if mso | IE]>
                </td>
                
                <td
                   style="vertical-align:top;width:600px;"
                >
                <![endif]-->
                            <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                              <table role="presentation" style="vertical-align:top;" width="100%" cellspacing="0" cellpadding="0" border="0">
                                <tbody><tr>
                                  <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="left">
                                    <div style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;line-height:20px;text-align:left;color:#ffffff;">
                                      <p style="margin: 0;">this email is sent automaticly by alpha-limit.com to it's employes if you recive this email by mistake or you need help/support please reach out at : <a href="#" style="color: #009BF9; text-decoration: none; word-break: normal;">support@alpha-limit.com</a></p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody></table>
                            </div>
                            <!--[if mso | IE]>
                </td>
                
            </tr>
            </table>
          <![endif]-->
                          </div>
                          <!--[if mso | IE]>
              </td>
            
          </tr>
        
                    </table>
                  <![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]>
            </td>
          </tr>
        </table>
        
                </td>
              </tr>
            
                    </table>
                  <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]>
            </td>
          </tr>
        </table>
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
        >
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
      <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;border-radius:0 0 4px 4px;max-width:600px;">
        <table role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;border-radius:0 0 4px 4px;" cellspacing="0" cellpadding="0" border="0" align="center">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  
          <tr>
        
              <td
                 class="" style="vertical-align:top;width:600px;"
              >
            <![endif]-->
                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                  <table role="presentation" style="vertical-align:top;" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody><tr>
                      <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="center">
                        <div style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;line-height:20px;text-align:center;color:#93999f;">© 2020 [Coded Mails] GmbH, All rights reserved <br /> Email: <a class="footer-link" href="mailto:support@alpha-limit.com" style="color: #009BF9; text-decoration: none; word-break: normal;">support@alpha-limit.com</a> <br /> Web: <a class="footer-link" href="https://www.alpha-limit.com" style="color: #009BF9; text-decoration: none; word-break: normal;">www.alpha-limit.com</a></div>
                      </td>
                    </tr>
                    <tr>
                      <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="center">
                        <!--[if mso | IE]>
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
        >
          <tr>
        
                <td>
              <![endif]-->
                        <table role="presentation" style="float:none;display:inline-table;" cellspacing="0" cellpadding="0" border="0" align="center">
                          <tbody><tr>
                            <td style="padding:4px;">
                              <table role="presentation" style="border-radius:3px;width:24px;" cellspacing="0" cellpadding="0" border="0">
                                <tbody><tr>
                                  <td style="font-size:0;height:24px;vertical-align:middle;width:24px;">
                                    <a href="#" target="_blank" style="color: #009BF9; text-decoration: none; word-break: normal;">
                                      <img alt="twitter-logo" src="https://codedmails.com/images/social/color/twitter-logo-transparent.png" style="border-radius:3px;display:block;" width="24" height="24" />
                                    </a>
                                  </td>
                                </tr>
                              </tbody></table>
                            </td>
                          </tr>
                        </tbody></table>
                        <!--[if mso | IE]>
                </td>
              
                <td>
              <![endif]-->
                        <table role="presentation" style="float:none;display:inline-table;" cellspacing="0" cellpadding="0" border="0" align="center">
                          <tbody><tr>
                            <td style="padding:4px;">
                              <table role="presentation" style="border-radius:3px;width:24px;" cellspacing="0" cellpadding="0" border="0">
                                <tbody><tr>
                                  <td style="font-size:0;height:24px;vertical-align:middle;width:24px;">
                                    <a href="#" target="_blank" style="color: #009BF9; text-decoration: none; word-break: normal;">
                                      <img alt="facebook-logo" src="https://codedmails.com/images/social/color/facebook-logo-transparent.png" style="border-radius:3px;display:block;" width="24" height="24" />
                                    </a>
                                  </td>
                                </tr>
                              </tbody></table>
                            </td>
                          </tr>
                        </tbody></table>
                        <!--[if mso | IE]>
                </td>
              
                <td>
              <![endif]-->
                        <table role="presentation" style="float:none;display:inline-table;" cellspacing="0" cellpadding="0" border="0" align="center">
                          <tbody><tr>
                            <td style="padding:4px;">
                              <table role="presentation" style="border-radius:3px;width:24px;" cellspacing="0" cellpadding="0" border="0">
                                <tbody><tr>
                                  <td style="font-size:0;height:24px;vertical-align:middle;width:24px;">
                                    <a href="#" target="_blank" style="color: #009BF9; text-decoration: none; word-break: normal;">
                                      <img alt="instagram-logo" src="https://codedmails.com/images/social/color/insta-logo-transparent.png" style="border-radius:3px;display:block;" width="24" height="24" />
                                    </a>
                                  </td>
                                </tr>
                              </tbody></table>
                            </td>
                          </tr>
                        </tbody></table>
                        <!--[if mso | IE]>
                </td>
              
                <td>
              <![endif]-->
                        <table role="presentation" style="float:none;display:inline-table;" cellspacing="0" cellpadding="0" border="0" align="center">
                          <tbody><tr>
                            <td style="padding:4px;">
                              <table role="presentation" style="border-radius:3px;width:24px;" cellspacing="0" cellpadding="0" border="0">
                                <tbody><tr>
                                  <td style="font-size:0;height:24px;vertical-align:middle;width:24px;">
                                    <a href="#" target="_blank" style="color: #009BF9; text-decoration: none; word-break: normal;">
                                      <img alt="youtube-logo" src="https://codedmails.com/images/social/color/youtube-logo-transparent.png" style="border-radius:3px;display:block;" width="24" height="24" />
                                    </a>
                                  </td>
                                </tr>
                              </tbody></table>
                            </td>
                          </tr>
                        </tbody></table>
                        <!--[if mso | IE]>
                </td>
              
            </tr>
          </table>
        <![endif]-->
                      </td>
                    </tr>
                  </tbody></table>
                </div>
                <!--[if mso | IE]>
              </td>
            
          </tr>
        
                    </table>
                  <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]>
            </td>
          </tr>
        </table>
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
        >
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
      <div style="margin:0px auto;max-width:600px;">
        <table role="presentation" style="width:100%;" cellspacing="0" cellpadding="0" border="0" align="center">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  
          <tr>
        
              <td
                 class="" style="vertical-align:top;width:600px;"
              >
            <![endif]-->
                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                  <table role="presentation" style="vertical-align:top;" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody><tr>
                      <td style="font-size:0px;word-break:break-word;">
                        <!--[if mso | IE]>
      
          <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="1" style="vertical-align:top;height:1px;">
        
      <![endif]-->
                        <div style="height:1px;"> </div>
                        <!--[if mso | IE]>
      
          </td></tr></table>
        
      <![endif]-->
                      </td>
                    </tr>
                  </tbody></table>
                </div>
                <!--[if mso | IE]>
              </td>
            
          </tr>
        
                    </table>
                  <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]>
            </td>
          </tr>
        </table>
        <![endif]-->
    </div>
  
  
  </body></html>`)
};

export default createTemplate;

