import nodemailer from 'nodemailer';

export default function sendEmail( req,res) {
  const { email, name, content } = req.query;
  const transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    secure: true,
    auth: {
      user: '1025558554@qq.com',
      pass: 'kykwjtlerrpdbcge',
    },
  });

  const mailOptions = {
    from: '1025558554@qq.com',
    to: '2481421459@qq.com',
    subject: '收到一个新的客户邮件',
    html: `
    <p>name: ${name}</p>
    <p>email: ${email}</p>
    <p>content: ${content}</p>  
    `,
  };

  transporter.sendMail(mailOptions, function(err, data){
    res.status(200).json({
      code: 200,
      data: 'ok',
    });
  });
};
