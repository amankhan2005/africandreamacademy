import { Resend } from "resend";

// =======================
// ✅ LAZY INIT (MAIN FIX)
// =======================
let resend;

const getResend = () => {
  if (!resend) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("❌ RESEND_API_KEY missing in .env");
    }
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
};

// ✅ ENV CONFIG
const FROM_EMAIL = process.env.EMAIL_FROM;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const COMPANY_NAME = process.env.COMPANY_NAME || "African Dream Academy";

// 🎨 Brand — African Dream Academy
const gradient     = "linear-gradient(135deg, #8B1A1A, #E8920A, #F0B429)";
const primaryColor = "#8B1A1A";
const darkAccent   = "#6B1212";
const lightBg      = "#FFFBF5";
const ink          = "#1A0A00";
const amber        = "#E8920A";
const gold         = "#F0B429";

// =======================
// 🔥 ADMIN EMAIL
// =======================
export const sendAdminEmail = async ({ name, email, phone, message }) => {
  try {
    const resend = getResend();

    if (!ADMIN_EMAIL) throw new Error("ADMIN_EMAIL not defined");
    if (!name || !email || !message) throw new Error("Missing required fields");

    const response = await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Contact Inquiry — ${COMPANY_NAME}`,

      html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>New Contact Inquiry</title></head>
<body style="margin:0;padding:0;background-color:${lightBg};font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${lightBg};padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:620px;">

          <!-- HEADER BADGE -->
          <tr>
            <td align="center" style="padding-bottom:20px;">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background:${gradient};border-radius:999px;padding:6px 18px;">
                    <span style="color:#ffffff;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">Internal Notification</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- MAIN CARD -->
          <tr>
            <td style="background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 4px 32px rgba(139,26,26,0.10),0 1px 4px rgba(26,10,0,0.05);">

              <!-- TOP ACCENT BAR -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background:${gradient};padding:28px 36px 24px 36px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="vertical-align:middle;">
                          <table cellpadding="0" cellspacing="0" border="0" style="display:inline-table;vertical-align:middle;margin-right:14px;">
                            <tr>
                              <td style="background:rgba(255,255,255,0.18);border-radius:50%;width:44px;height:44px;text-align:center;vertical-align:middle;">
                                <span style="font-size:20px;line-height:44px;">📩</span>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td style="vertical-align:middle;padding-left:14px;">
                          <p style="margin:0;color:rgba(255,255,255,0.8);font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;">New Contact Inquiry</p>
                          <h1 style="margin:4px 0 0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.3px;">${COMPANY_NAME}</h1>
                        </td>
                        <td align="right" style="vertical-align:middle;">
                          <p style="margin:0;color:rgba(255,255,255,0.65);font-size:11px;font-weight:500;">
                            ${new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- ALERT BANNER -->
                <tr>
                  <td style="background:${darkAccent};padding:10px 36px;">
                    <p style="margin:0;color:rgba(255,255,255,0.85);font-size:12px;font-weight:500;">
                      ● &nbsp;Someone has submitted an inquiry — please follow up promptly.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- BODY -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding:32px 36px 8px;">
                    <p style="margin:0;color:#6b7280;font-size:13px;line-height:1.6;">
                      The following person has reached out to ${COMPANY_NAME}. Please review the details below and connect with them as soon as possible.
                    </p>
                  </td>
                </tr>

                <!-- DATA CARD -->
                <tr>
                  <td style="padding:20px 36px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-radius:14px;overflow:hidden;border:1px solid rgba(240,180,41,0.25);">

                      <!-- NAME ROW -->
                      <tr>
                        <td style="padding:0;">
                          <table width="100%" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td style="background:${lightBg};border-bottom:1px solid rgba(240,180,41,0.2);padding:16px 20px;width:36%;vertical-align:top;">
                                <table cellpadding="0" cellspacing="0" border="0">
                                  <tr>
                                    <td style="vertical-align:middle;">
                                      <span style="font-size:14px;margin-right:8px;">👤</span>
                                    </td>
                                    <td style="vertical-align:middle;padding-left:6px;">
                                      <span style="font-size:11px;font-weight:700;color:${amber};letter-spacing:0.8px;text-transform:uppercase;">Full Name</span>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td style="background:#ffffff;border-bottom:1px solid rgba(240,180,41,0.2);padding:16px 20px;vertical-align:top;">
                                <span style="font-size:15px;font-weight:700;color:${ink};">${name}</span>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- EMAIL ROW -->
                      <tr>
                        <td style="padding:0;">
                          <table width="100%" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td style="background:${lightBg};border-bottom:1px solid rgba(240,180,41,0.2);padding:16px 20px;width:36%;vertical-align:top;">
                                <table cellpadding="0" cellspacing="0" border="0">
                                  <tr>
                                    <td style="vertical-align:middle;">
                                      <span style="font-size:14px;margin-right:8px;">✉️</span>
                                    </td>
                                    <td style="vertical-align:middle;padding-left:6px;">
                                      <span style="font-size:11px;font-weight:700;color:${amber};letter-spacing:0.8px;text-transform:uppercase;">Email</span>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td style="background:#ffffff;border-bottom:1px solid rgba(240,180,41,0.2);padding:16px 20px;vertical-align:top;">
                                <a href="mailto:${email}" style="font-size:14px;font-weight:600;color:${primaryColor};text-decoration:none;border-bottom:1px solid ${gold};">${email}</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- PHONE ROW -->
                      <tr>
                        <td style="padding:0;">
                          <table width="100%" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td style="background:${lightBg};border-bottom:1px solid rgba(240,180,41,0.2);padding:16px 20px;width:36%;vertical-align:top;">
                                <table cellpadding="0" cellspacing="0" border="0">
                                  <tr>
                                    <td style="vertical-align:middle;">
                                      <span style="font-size:14px;margin-right:8px;">📞</span>
                                    </td>
                                    <td style="vertical-align:middle;padding-left:6px;">
                                      <span style="font-size:11px;font-weight:700;color:${amber};letter-spacing:0.8px;text-transform:uppercase;">Phone</span>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td style="background:#ffffff;border-bottom:1px solid rgba(240,180,41,0.2);padding:16px 20px;vertical-align:top;">
                                <span style="font-size:14px;font-weight:500;color:${phone ? ink : amber};">${phone || "Not provided"}</span>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- MESSAGE ROW -->
                      <tr>
                        <td style="padding:0;">
                          <table width="100%" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td style="background:${lightBg};padding:16px 20px;width:36%;vertical-align:top;">
                                <table cellpadding="0" cellspacing="0" border="0">
                                  <tr>
                                    <td style="vertical-align:top;padding-top:2px;">
                                      <span style="font-size:14px;margin-right:8px;">💬</span>
                                    </td>
                                    <td style="vertical-align:top;padding-left:6px;padding-top:2px;">
                                      <span style="font-size:11px;font-weight:700;color:${amber};letter-spacing:0.8px;text-transform:uppercase;">Message</span>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td style="background:#ffffff;padding:16px 20px;vertical-align:top;">
                                <p style="margin:0;font-size:14px;font-weight:400;color:#374151;line-height:1.7;">${message}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                    </table>
                  </td>
                </tr>

                <!-- QUICK REPLY CTA -->
                <tr>
                  <td style="padding:8px 36px 36px;">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="border-radius:6px;overflow:hidden;background:${primaryColor};box-shadow:0 4px 16px rgba(139,26,26,0.28);">
                          <a href="mailto:${email}" style="display:inline-block;padding:13px 28px;font-size:13px;font-weight:700;color:#ffffff;text-decoration:none;letter-spacing:0.3px;">
                            Reply to ${name} →
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="padding:24px 0 0;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center">
                    <p style="margin:0;font-size:11px;color:rgba(26,10,0,0.4);line-height:1.8;">
                      © ${new Date().getFullYear()} <strong style="color:${ink};">${COMPANY_NAME}</strong><br/>
                      This is an automated system notification — do not reply to this email.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
`,
    });

    return { success: true, data: response };
  } catch (error) {
    console.error("❌ Admin Email Error:", error.message);
    return { success: false, error: error.message };
  }
};

// =======================
// 🔥 USER AUTO REPLY
// =======================
export const sendUserEmail = async ({ name, email }) => {
  try {
    const resend = getResend();

    if (!name || !email) throw new Error("Missing required fields");

    const response = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: `We Received Your Message — ${COMPANY_NAME}`,

      html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Inquiry Received</title></head>
<body style="margin:0;padding:0;background-color:${lightBg};font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${lightBg};padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">

          <!-- MAIN CARD -->
          <tr>
            <td style="background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 8px 40px rgba(139,26,26,0.10),0 1px 4px rgba(26,10,0,0.05);">

              <!-- HERO HEADER -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background:${gradient};padding:48px 40px 40px;text-align:center;">

                    <!-- Logo circle -->
                    <table cellpadding="0" cellspacing="0" border="0" align="center" style="margin-bottom:20px;">
                      <tr>
                        <td style="background:rgba(255,255,255,0.15);border-radius:50%;width:64px;height:64px;text-align:center;vertical-align:middle;border:2px solid rgba(255,255,255,0.3);">
                          <span style="font-size:28px;line-height:64px;">🌍</span>
                        </td>
                      </tr>
                    </table>

                    <h1 style="margin:0 0 8px;color:#ffffff;font-size:26px;font-weight:800;letter-spacing:-0.5px;">${COMPANY_NAME}</h1>
                    <p style="margin:0;color:rgba(255,255,255,0.75);font-size:13px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;">Many Dreams · One Hope · One Future</p>

                    <!-- Divider -->
                    <table cellpadding="0" cellspacing="0" border="0" align="center" style="margin:24px auto 0;">
                      <tr>
                        <td style="background:rgba(255,255,255,0.25);height:1px;width:64px;"></td>
                      </tr>
                    </table>

                  </td>
                </tr>

                <!-- STATUS PILL -->
                <tr>
                  <td align="center" style="background:${darkAccent};padding:12px 40px;">
                    <table cellpadding="0" cellspacing="0" border="0" align="center">
                      <tr>
                        <td style="background:rgba(255,255,255,0.12);border-radius:999px;padding:5px 16px;">
                          <span style="color:#ffffff;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">✓ &nbsp; Message Received Successfully</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- BODY -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0">

                <!-- GREETING -->
                <tr>
                  <td style="padding:36px 40px 0;">
                    <h2 style="margin:0 0 12px;color:${ink};font-size:22px;font-weight:700;">Hello ${name}, 👋</h2>
                    <p style="margin:0;color:#6b7280;font-size:15px;line-height:1.75;">
                      Thank you for reaching out to <strong style="color:${ink};">${COMPANY_NAME}</strong>. Your message means a great deal to us. We've received your inquiry and a member of our academy team will be in touch with you very soon.
                    </p>
                  </td>
                </tr>

                <!-- TRUST CARDS -->
                <tr>
                  <td style="padding:28px 40px 0;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-radius:16px;overflow:hidden;border:1px solid rgba(240,180,41,0.25);">

                      <!-- Tuition-Free Education -->
                      <tr>
                        <td style="padding:0;">
                          <table width="100%" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td style="background:${lightBg};padding:18px 22px;border-bottom:1px solid rgba(240,180,41,0.2);vertical-align:middle;width:52px;">
                                <div style="background:${gradient};border-radius:10px;width:38px;height:38px;text-align:center;">
                                  <span style="font-size:18px;line-height:38px;">🎓</span>
                                </div>
                              </td>
                              <td style="background:${lightBg};padding:18px 22px 18px 0;border-bottom:1px solid rgba(240,180,41,0.2);vertical-align:middle;">
                                <p style="margin:0 0 2px;font-size:11px;font-weight:700;color:${amber};letter-spacing:0.8px;text-transform:uppercase;">World-Class Education</p>
                                <p style="margin:0;font-size:14px;font-weight:700;color:${ink};">100% tuition-free for every student</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- Community & Impact -->
                      <tr>
                        <td style="padding:0;">
                          <table width="100%" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td style="background:#ffffff;padding:18px 22px;border-bottom:1px solid rgba(240,180,41,0.2);vertical-align:middle;width:52px;">
                                <div style="background:linear-gradient(135deg,#E8920A,#F0B429);border-radius:10px;width:38px;height:38px;text-align:center;">
                                  <span style="font-size:18px;line-height:38px;">🌱</span>
                                </div>
                              </td>
                              <td style="background:#ffffff;padding:18px 22px 18px 0;border-bottom:1px solid rgba(240,180,41,0.2);vertical-align:middle;">
                                <p style="margin:0 0 2px;font-size:11px;font-weight:700;color:${amber};letter-spacing:0.8px;text-transform:uppercase;">Community Impact</p>
                                <p style="margin:0;font-size:14px;font-weight:700;color:${ink};">Over 1,500 students educated in Liberia</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- Dedicated Support -->
                      <tr>
                        <td style="padding:0;">
                          <table width="100%" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td style="background:${lightBg};padding:18px 22px;vertical-align:middle;width:52px;">
                                <div style="background:linear-gradient(135deg,#8B1A1A,#C0392B);border-radius:10px;width:38px;height:38px;text-align:center;">
                                  <span style="font-size:18px;line-height:38px;">🤝</span>
                                </div>
                              </td>
                              <td style="background:${lightBg};padding:18px 22px 18px 0;vertical-align:middle;">
                                <p style="margin:0 0 2px;font-size:11px;font-weight:700;color:${amber};letter-spacing:0.8px;text-transform:uppercase;">Dedicated Support</p>
                                <p style="margin:0;font-size:14px;font-weight:700;color:${ink};">Our team is here for you every step</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                    </table>
                  </td>
                </tr>

                <!-- MESSAGE -->
                <tr>
                  <td style="padding:28px 40px 4px;">
                    <p style="margin:0;font-size:14px;color:#6b7280;line-height:1.75;">
                      If you have any additional information to share or urgent questions about our academy or programs, please don't hesitate to reach out directly. We are honoured by your interest in the work we do in Liberia.
                    </p>
                  </td>
                </tr>

                <!-- CTA BUTTON -->
                <tr>
                  <td style="padding:28px 40px 36px;">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="border-radius:6px;overflow:hidden;background:${primaryColor};box-shadow:0 6px 20px rgba(139,26,26,0.28);">
                          <a href="mailto:${ADMIN_EMAIL}" style="display:inline-block;padding:15px 32px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;letter-spacing:0.3px;">
                            Contact Our Academy Team →
                          </a>
                        </td>
                      </tr>
                    </table>
                    <p style="margin:14px 0 0;font-size:12px;color:rgba(26,10,0,0.4);">
                      Or reply directly to this email — we'll get back to you promptly.
                    </p>
                  </td>
                </tr>

              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="padding:28px 0 0;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">

                <!-- Divider dots -->
                <tr>
                  <td align="center" style="padding-bottom:20px;">
                    <span style="font-size:14px;color:${gold};letter-spacing:6px;">· · ·</span>
                  </td>
                </tr>

                <tr>
                  <td align="center">
                    <p style="margin:0;font-size:11px;color:rgba(26,10,0,0.4);line-height:2;">
                      © ${new Date().getFullYear()} <strong style="color:${ink};">${COMPANY_NAME}</strong><br/>
                      Many Dreams · One Hope 🌍<br/>
                      <span style="font-size:10px;color:rgba(26,10,0,0.3);">This is an automated confirmation — no action required.</span>
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
`,
    });

    return { success: true, data: response };
  } catch (error) {
    console.error("❌ User Email Error:", error.message);
    return { success: false, error: error.message };
  }
};