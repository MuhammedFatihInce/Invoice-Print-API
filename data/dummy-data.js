const User = require("../model/user");
const Invoice = require("../model/invoice");
const Printer = require("../model/printer");

async function populate() {
    const count = await User.count();

    if(count == 0) { 

        await User.bulkCreate([
            { name: 'Ahmet Yılmaz', email: 'ahmet@example.com', password: "123" },
            { name: 'Mehmet Demir', email: 'mehmet@example.com', password: "123" },
            { name: 'Ayşe Kaya', email: 'ayse@example.com', password: "123" },
            { name: 'Fatma Çelik', email: 'fatma@example.com', password: "123" },
            { name: 'Ali Şahin', email: 'ali@example.com', password: "123" },
          ]);

        await Invoice.bulkCreate([
            { userId: 1, invoiceDate: '2024-01-01', dueDate: '2024-01-15', paymentDate: '2024-01-10', amount: 150.00, taxRate: 18.00, status: true, description: 'Kırtasiye malzemeleri', invoicePath: "D:/CV.pdf", download:false }, 
            { userId: 2, invoiceDate: '2024-02-01', dueDate: '2024-02-15', paymentDate: '2024-02-14', amount: 200.00, taxRate: 18.00, status: true, description: 'Danışmanlık hizmetleri', invoicePath: "file-1722968175946-876297154-CV.pdf", download:false  },
            { userId: 3, invoiceDate: '2024-03-01', dueDate: '2024-03-15', paymentDate: '2024-03-12', amount: 300.00, taxRate: 18.00, status: true, description: 'Yazılım lisansı', invoicePath: "D:/CV.pdf", download:false  },
            { userId: 4, invoiceDate: '2024-04-01', dueDate: '2024-04-15', paymentDate: '2024-04-17', amount: 450.00, taxRate: 18.00, status: true, description: 'Pazarlama hizmetleri', invoicePath: "D:/CV.pdf", download:false  },
            { userId: 5, invoiceDate: '2024-05-01', dueDate: '2024-05-15', paymentDate: '2024-05-10', amount: 500.00, taxRate: 18.00, status: true, description: 'Geliştirme hizmetleri', invoicePath: "D:/CV.pdf", download:false  },
            { userId: 1, invoiceDate: '2024-06-01', dueDate: '2024-06-15', paymentDate: '2024-06-10', amount: 275.00, taxRate: 18.00, status: true, description: 'Ofis temizlik malzemeleri', invoicePath: "D:/CV.pdf", download:false  },
            { userId: 2, invoiceDate: '2024-07-01', dueDate: '2024-07-15', paymentDate: '2024-07-10', amount: 325.00, taxRate: 18.00, status: true, description: 'Düzenleme hizmetleri', invoicePath: "file-1722963700141-779198513-CV.pdf", download:false  },
            { userId: 3, invoiceDate: '2024-08-01', dueDate: '2024-08-15', paymentDate: '2024-08-10', amount: 425.00, taxRate: 18.00, status: true, description: 'Eğitim kursu', invoicePath: "D:/CV.pdf", download:false  },
            { userId: 4, invoiceDate: '2024-09-01', dueDate: '2024-09-15', paymentDate: '2024-09-10', amount: 525.00, taxRate: 18.00, status: true, description: 'Müşteri desteği', invoicePath: "D:/CV.pdf", download:false  },
            { userId: 5, invoiceDate: '2024-10-01', dueDate: '2024-10-15', paymentDate: '2024-10-10', amount: 625.00, taxRate: 18.00, status: true, description: 'Yazılım geliştirme', invoicePath: "D:/CV.pdf", download:false  },
            { userId: 1, invoiceDate: '2024-11-01', dueDate: '2024-11-15', paymentDate: '2024-11-10', amount: 725.00, taxRate: 18.00, status: true, description: 'Reklam hizmetleri', invoicePath: "D:/CV.pdf", download:false  },
            { userId: 2, invoiceDate: '2024-12-01', dueDate: '2024-12-15', paymentDate: '2024-12-14', amount: 825.00, taxRate: 18.00, status: true, description: 'Web tasarım', invoicePath: "file-1722963700141-779198513-CV.pdf", download:false  },
            { userId: 3, invoiceDate: '2025-01-01', dueDate: '2025-01-15', paymentDate: '2025-01-12', amount: 925.00, taxRate: 18.00, status: true, description: 'SEO danışmanlığı', invoicePath: "D:/CV.pdf", download:false  },
            { userId: 4, invoiceDate: '2025-02-01', dueDate: '2025-02-15', paymentDate: '2025-02-17', amount: 1025.00, taxRate: 18.00, status: true, description: 'E-ticaret entegrasyonu', invoicePath: "D:/CV.pdf", download:false  },
            { userId: 5, invoiceDate: '2025-03-01', dueDate: '2025-03-15', paymentDate: '2025-03-10', amount: 1125.00, taxRate: 18.00, status: true, description: 'Mobil uygulama geliştirme', invoicePath: "D:/CV.pdf", download:false  },
            { userId: 1, invoiceDate: '2025-04-01', dueDate: '2025-04-15', paymentDate: '2025-04-10', amount: 1225.00, taxRate: 18.00, status: true, description: 'Eğitim materyalleri', invoicePath: "D:/CV.pdf", download:false  },
            { userId: 2, invoiceDate: '2025-05-01', dueDate: '2025-05-15', paymentDate: '2025-05-10', amount: 1325.00, taxRate: 18.00, status: true, description: 'Sosyal medya yönetimi', invoicePath: "file-1722968175946-876297154-CV.pdf", download:false  },
            { userId: 3, invoiceDate: '2025-06-01', dueDate: '2025-06-15', paymentDate: '2025-06-10', amount: 1425.00, taxRate: 18.00, status: true, description: 'Grafik tasarım', invoicePath: "D:/CV.pdf", download:false  },
            { userId: 4, invoiceDate: '2025-07-01', dueDate: '2025-07-15', paymentDate: '2025-07-10', amount: 1525.00, taxRate: 18.00, status: true, description: 'Veritabanı yönetimi', invoicePath: "D:/CV.pdf", download:false  },
            { userId: 5, invoiceDate: '2025-08-01', dueDate: '2025-08-15', paymentDate: '2025-08-10', amount: 1625.00, taxRate: 18.00, status: true, description: 'E-posta pazarlama', invoicePath: "D:/CV.pdf", download:false  },
            { userId: 1, invoiceDate: '2025-09-01', dueDate: '2025-09-15', paymentDate: '2025-09-10', amount: 1725.00, taxRate: 18.00, status: true, description: 'Cloud hizmetleri', invoicePath: "D:/CV.pdf", download:false  },
            { userId: 2, invoiceDate: '2025-10-01', dueDate: '2025-10-15', paymentDate: '2025-10-10', amount: 1825.00, taxRate: 18.00, status: true, description: 'Yazılım testi', invoicePath: "file-1722963700141-779198513-CV.pdf", download:false  },
            { userId: 3, invoiceDate: '2025-11-01', dueDate: '2025-11-15', paymentDate: '2025-11-10', amount: 1925.00, taxRate: 18.00, status: true, description: 'Web güvenliği', invoicePath: "D:/CV.pdf", download:false  },
            { userId: 4, invoiceDate: '2025-12-01', dueDate: '2025-12-15', paymentDate: '2025-12-14', amount: 2025.00, taxRate: 18.00, status: true, description: 'Ağ yönetimi', invoicePath: "D:/CV.pdf", download:false  },
            { userId: 5, invoiceDate: '2026-01-01', dueDate: '2026-01-15', paymentDate: '2026-01-12', amount: 2125.00, taxRate: 18.00, status: true, description: 'Yazılım danışmanlığı', invoicePath: "D:/CV.pdf", download:false  },
            { userId: 1, invoiceDate: '2026-02-01', dueDate: '2026-02-15', paymentDate: '2026-02-17', amount: 2225.00, taxRate: 18.00, status: true, description: 'E-ticaret optimizasyonu', invoicePath: "D:/CV.pdf", download:false  },
        ]);

        await Printer.create({ userId: 2, Name: "HP Printer",	PortNumber: "800", HostAddress: "127.0.0.1", Status: false
        });
    }    


}

module.exports = populate;