"use client"

import { useState } from "react"
import { Check, Copy, ChevronDown, ChevronRight, Search, Clock, Terminal } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  title?: string
  description?: string
}

function CodeBlock({ code, title, description }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative my-3 rounded-lg border border-border bg-card overflow-hidden">
      {title && (
        <div className="px-4 py-2 border-b border-border bg-muted/50">
          <span className="text-sm font-medium text-foreground">{title}</span>
          {description && <p className="text-xs text-muted-foreground mt-0.5">{description}</p>}
        </div>
      )}
      <div className="relative">
        <pre className="p-4 overflow-x-auto text-sm font-mono text-foreground bg-zinc-950 dark:bg-zinc-900 leading-relaxed">
          <code>{code}</code>
        </pre>
        <button
          onClick={handleCopy}
          className={cn(
            "absolute top-2 right-2 p-2 rounded-md transition-all duration-200",
            "bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white",
            "opacity-0 group-hover:opacity-100 focus:opacity-100"
          )}
          aria-label="Копировать код"
        >
          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
    </div>
  )
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-3 rounded-lg border-l-4 border-primary bg-primary/5 px-4 py-3 text-sm text-foreground leading-relaxed">
      {children}
    </div>
  )
}

interface SectionProps {
  id: string
  title: string
  device: string
  children: React.ReactNode
  defaultOpen?: boolean
}

function Section({ id, title, device, children, defaultOpen = false }: SectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div id={id} className="border border-border rounded-xl mb-4 overflow-hidden bg-card scroll-mt-44">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          {isOpen ? (
            <ChevronDown className="w-5 h-5 text-primary shrink-0" />
          ) : (
            <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0" />
          )}
          <div>
            <h3 className="font-semibold text-foreground">{title}</h3>
            <span className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
              <Terminal className="w-3 h-3" /> {device}
            </span>
          </div>
        </div>
      </button>
      {isOpen && <div className="px-4 pb-4 border-t border-border pt-2">{children}</div>}
    </div>
  )
}

function DeviceHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-semibold mt-5 mb-2 text-foreground flex items-center gap-2">
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
      {children}
    </h4>
  )
}

interface ModuleProps {
  title: string
  time: string
  children: React.ReactNode
}

function Module({ title, time, children }: ModuleProps) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border">
        <div className="p-2 rounded-lg bg-primary/10">
          <Clock className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">{title}</h2>
          <span className="text-sm text-muted-foreground">{time}</span>
        </div>
      </div>
      {children}
    </div>
  )
}

const navItems = [
  { href: "#hostname", label: "Hostname", module: "module1" },
  { href: "#network", label: "Сеть", module: "module1" },
  { href: "#gre", label: "GRE", module: "module1" },
  { href: "#ospf", label: "OSPF", module: "module1" },
  { href: "#dns", label: "DNS", module: "module1" },
  { href: "#dhcp", label: "DHCP", module: "module1" },
  { href: "#ssh", label: "SSH", module: "module1" },
  { href: "#timezone", label: "Таймзоны", module: "module1" },
  { href: "#chrony", label: "Chrony", module: "module2" },
  { href: "#nginx", label: "Nginx", module: "module2" },
  { href: "#portfwd", label: "Проброс портов", module: "module2" },
  { href: "#samba", label: "Samba DC", module: "module2" },
  { href: "#domain", label: "Домен", module: "module2" },
  { href: "#ansible", label: "Ansible", module: "module2" },
  { href: "#docker", label: "Docker", module: "module2" },
  { href: "#raid", label: "RAID0", module: "module2" },
  { href: "#nfs", label: "NFS", module: "module2" },
  { href: "#web", label: "Web/LAMP", module: "module2" },
  { href: "#yandex", label: "Яндекс", module: "module2" },
]

export default function ExamCheatsheet() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeModule, setActiveModule] = useState<"all" | "module1" | "module2">("all")

  const visibleNav = navItems.filter(
    (item) => activeModule === "all" || item.module === activeModule
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Документация по использованию Linux</h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Поиск команд..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 pr-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 w-full sm:w-64"
                />
              </div>
            </div>
          </div>
          {/* Module Tabs */}
          <div className="flex gap-2 mt-4">
            {[
              { id: "all" as const, label: "Все" },
              { id: "module1" as const, label: "Модуль изучения сети" },
              { id: "module2" as const, label: "Модуль использования служб в корпоративной сети" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveModule(tab.id)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  activeModule === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Quick Nav */}
      <nav className="sticky top-[125px] z-40 bg-muted/30 backdrop-blur border-b border-border py-2 overflow-x-auto">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex gap-2 text-xs">
            {visibleNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 rounded-full bg-card border border-border hover:bg-muted transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-6">
        {/* ============ MODULE 1 ============ */}
        {(activeModule === "all" || activeModule === "module1") && (
          <Module title="Модуль изучения сети: Сеть, DNS, DHCP, SSH, время" time="Базовая инфраструктура">
            {/* Hostname */}
            <Section id="hostname" title="Задание 1: Настройка hostname" device="Все устройства" defaultOpen>
              <CodeBlock title="ISP" code={`hostnamectl hostname isp
exec bash`} />
              <CodeBlock title="HQ-RTR (EcoRouter)" code={`en
conf t
hostname hq-rtr.au-team.irpo`} />
              <CodeBlock title="BR-RTR (EcoRouter)" code={`en
conf t
hostname br-rtr.au-team.irpo`} />
              <CodeBlock title="HQ-SRV" code={`hostnamectl hostname hq-srv.au-team.irpo
exec bash`} />
              <CodeBlock title="BR-SRV" code={`hostnamectl hostname br-srv.au-team.irpo
exec bash`} />
              <CodeBlock title="CLI" code={`hostnamectl hostname cli.au-team.irpo
exec bash`} />
            </Section>

            {/* Network */}
            <Section id="network" title="Задание 2: Настройка сети и NAT" device="ISP, HQ-RTR, BR-RTR, HQ-SRV, BR-SRV">
              <DeviceHeading>ISP</DeviceHeading>
              <CodeBlock title="Копирование интерфейсов" code={`cd /etc/net/ifaces

cp -r ens18 /etc/net/ifaces/ens19
cp -r ens19 /etc/net/ifaces/ens20`} />
              <CodeBlock title="ens19 — options + адрес" code={`cd ens19
vim options
# BOOTPROTO=static

echo 172.16.4.1/28 > ipv4address`} />
              <CodeBlock title="ens20 — options + адрес" code={`cd /etc/net/ifaces/ens20
vim options
# BOOTPROTO=static

echo 172.16.5.1/28 > ipv4address`} />
              <CodeBlock title="Включение forwarding" code={`vim /etc/net/sysctl.conf
# net.ipv4.ip_forward = 1`} />
              <CodeBlock title="NAT (iptables) + проверка" code={`apt-get update
apt-get -y install iptables
iptables -t nat -A POSTROUTING -o ens18 -j MASQUERADE
iptables-save >> /etc/sysconfig/iptables
systemctl enable --now iptables
systemctl restart network

ping ya.ru
ping ya.ru -I 172.16.4.1
ping ya.ru -I 172.16.5.1`} />

              <DeviceHeading>HQ-RTR (EcoRouter)</DeviceHeading>
              <CodeBlock title="Интерфейсы и сервисы" code={`do sh port br

int isp
ip address 172.16.4.14/28
ex

int 100
ip address 192.168.1.1/26
ex

int 200
ip address 192.168.1.65/28
ex

int 999
ip address 192.168.1.81/29
ex

port te0
service-instance isp
encapsulation untagged
connect ip interface isp
ex
ex

port te1
service-instance 100
encapsulation dot1q 100
rewrite pop 1
connect ip interface 100
ex

service-instance 200
encapsulation dot1q 200
rewrite pop 1
connect ip interface 200
ex

service-instance 999
encapsulation dot1q 999
rewrite pop 1
connect ip interface 999
ex
ex`} />
              <CodeBlock title="Маршрут, DNS и NAT" code={`ip route 0.0.0.0/0 172.16.4.1
ip name-server 77.88.8.8
ip nat pool INTERNET 192.168.1.1-192.168.1.87
ip nat source dynamic inside-to-outside pool INTERNET overload 172.16.4.14

int isp
ip nat outside
ex

int 100
ip nat inside
ex

int 200
ip nat inside
ex

int 999
ip nat inside
ex
ex

wr`} />

              <DeviceHeading>BR-RTR (EcoRouter)</DeviceHeading>
              <CodeBlock title="Интерфейсы и сервисы" code={`do sh port br

int isp
ip address 172.16.5.14/28
ex

int lan
ip address 192.168.2.1/27
ex

port te0
service-instance isp
encapsulation untaged
connect ip interface isp
ex
ex

port te1
service-instance lan
encapsulation untaged
connect ip interface lan
ex
ex`} />
              <CodeBlock title="Маршрут, DNS и NAT" code={`ip route 0.0.0.0/0 172.16.5.1
ip name-server 77.88.8.8
ip nat pool INTERNET 192.168.2.1-192.168.2.30
ip nat source dynamic inside-to-outside pool INTERNET overload 172.16.5.14

int isp
ip nat outside
ex

int lan
ip nat inside
ex
ex

wr`} />

              <DeviceHeading>HQ-SRV</DeviceHeading>
              <CodeBlock code={`cd /etc/net/ifaces/ens18
echo 192.168.1.2/26 > ipv4address
echo default via 192.168.1.1 > ipv4route
echo nameserver 77.88.8.8 > resolv.conf
systemctl restart network`} />

              <DeviceHeading>BR-SRV</DeviceHeading>
              <CodeBlock code={`cd /etc/net/ifaces/ens18
echo 192.168.2.2/26 > ipv4address
echo default via 192.168.2.1 > ipv4route
echo nameserver 77.88.8.8 > resolv.conf
systemctl restart network`} />
            </Section>

            {/* GRE Tunnel */}
            <Section id="gre" title="Задание 3: GRE туннель" device="HQ-RTR, BR-RTR">
              <DeviceHeading>BR-RTR</DeviceHeading>
              <CodeBlock code={`en
conf t

int tunnel.1
ip address 10.10.10.10/30
ip tunnel 172.16.5.14 172.16.4.14 mode gre
ex
ex

wr`} />
              <DeviceHeading>HQ-RTR</DeviceHeading>
              <CodeBlock code={`en
conf t

int tunnel.1
ip address 10.10.10.9/30
ip tunnel 172.16.4.14 172.16.5.14 mode gre
ex
ex

wr`} />
            </Section>

            {/* OSPF */}
            <Section id="ospf" title="Задание 4: Настройка OSPF" device="HQ-RTR, BR-RTR">
              <DeviceHeading>BR-RTR</DeviceHeading>
              <CodeBlock code={`en
conf t

router ospf 1
network 10.10.10.8/30 area 0
network 192.168.2.0/27 area 0
area 0 authentication message-digest
passive-interface isp
passive-interface lan
ex

int tunnel.1
ip ospf authentication-key P@ssw0rd
ip ospf authentication message-digest
ex
ex

wr
do sh ip route`} />
              <DeviceHeading>HQ-RTR</DeviceHeading>
              <CodeBlock code={`en
conf t

router ospf 1
network 10.10.10.8/30 area 0
network 192.168.1.0/26 area 0
network 192.168.1.64/28 area 0
network 192.168.1.80/29 area 0
passive-interface isp
passive-interface 100
passive-interface 200
passive-interface 999
area 0 authentication message-digest
ex

int tunnel.1
ip ospf authentication-key P@ssw0rd
ip ospf authentication message-digest
ex
ex

wr
do sh ip route`} />
            </Section>

            {/* DNS */}
            <Section id="dns" title="Задание 5: Настройка DNS" device="HQ-SRV, HQ-RTR, BR-RTR">
              <DeviceHeading>HQ-SRV — установка</DeviceHeading>
              <CodeBlock code={`apt-get update
apt-get install bind bind-utils -y

cd /etc/bind`} />
              <Note>
                В <code className="font-mono">named.conf</code> закомментировать строку{" "}
                <code className="font-mono">#include &quot;/etc/bind/rndc.conf&quot;;</code> (поставить{" "}
                <code className="font-mono">#</code> перед строкой).
              </Note>
              <CodeBlock title="options.conf" code={`listen-on { 192.168.1.2; };

//listen-on-v6 { ::1; };

forwaders { 77.88.8.8; };

allow-query { any; };

allow-query-cache { any; };

allow-recursion { any; };`} />
              <CodeBlock title="local.conf" code={`zone "au-team.irpo" {
    type master;
    file "/etc/bind/zone/db.au";
};

zone "1.168.192.in-addr.arpa" {
    type master;
    file "/etc/bind/zone/db.revers";
};`} />
              <CodeBlock title="Создание файлов зон" code={`cd zone
cp localhost db.au
mcedit db.au
# заменить localhost -> au-team.irpo, 127.0.0.1 -> 192.168.1.2

cp db.au db.revers
chown root:named db.*`} />
              <CodeBlock title="db.au — прямая зона (дописать)" code={`hq-srv IN A 192.168.1.2
hq-rtr IN A 192.168.1.1
br-srv IN A 192.168.2.2
bt-rtr IN A 192.168.2.1
hq-cli IN A 192.168.1.66
moodle IN CNAME hq-rtr
wiki IN CNAME hq-rtr`} />
              <CodeBlock title="db.revers — обратная зона (дописать)" code={`1 IN PTR hq-rtr.au-team.irpo.
2 IN PTR hq-srv.au-team.irpo.
66 IN PTR hq-cli.au-team.irpo.`} />
              <CodeBlock title="Проверка зон и запуск" code={`named-checkzone au-team.irpo db.au
named-checkzone 1.168.192.in-addr.arpa db.revers
systemctl restart bind`} />
              <CodeBlock title="resolv.conf + проверки" code={`cd /etc/net/iface/ens19
mcedit resolv.conf
# nameserver 192.168.1.2
# search au-team.irpo

systemctl restart network
systemctl restart bind

host hq-srv
host 192.168.1.2
host wiki
host ya.ru`} />

              <DeviceHeading>HQ-RTR</DeviceHeading>
              <CodeBlock code={`en
conf t
ip name-server 192.168.1.2
ip domain-name au-team.irpo
ip domain-lookup
no ip name-server 77.88.8.8
do wr
do ping hq-srv`} />
              <DeviceHeading>BR-RTR</DeviceHeading>
              <CodeBlock code={`en
conf t
ip name-server 192.168.1.2
ip domain-name au-team.irpo
ip domain-lookup
no ip name-server 77.88.8.8
do wr
do ping hq-srv`} />
            </Section>

            {/* DHCP */}
            <Section id="dhcp" title="Задание 6: Настройка DHCP" device="HQ-RTR">
              <CodeBlock code={`en
conf t

ip pool hq 192.168.1.67-192.168.1.78

dhcp-server 1
static ip 192.168.1.66
client-id mac XX:XX:XX:XX:XX:XX
mask 255.255.255.240
gateway 192.168.1.65
dns 192.168.1.2
domain_search au-team.irpo
ex

pool hq 1
mask 255.255.255.240
gateway 192.168.165
dns 192.168.1.2
domain_search au-team.irpo

do wr

int lan
int 200
dhcp-server 1

do wr`} />
            </Section>

            {/* SSH */}
            <Section id="ssh" title="Задания 7–8: Пользователи и SSH" device="HQ-SRV, BR-SRV, HQ-RTR, BR-RTR">
              <DeviceHeading>HQ-SRV и BR-SRV — пользователь</DeviceHeading>
              <CodeBlock code={`useradd sshuser -u 1010
passwd sshuser
# P@ssw0rd
usermod -aG wheel sshuser`} />
              <CodeBlock title="/etc/sudoers" code={`sshuser ALL=(ALL) NOPASSWD:ALL`} />

              <DeviceHeading>HQ-RTR и BR-RTR — пользователь</DeviceHeading>
              <CodeBlock code={`username net_admin
password P@ssw0rd
role admin`} />

              <DeviceHeading>HQ-SRV и BR-SRV — настройка SSH</DeviceHeading>
              <CodeBlock title="/etc/openssh/sshd_config" code={`Port 2024
AllowUsers sshuser
MaxAuthTries 2
Banner /etc/banner.net`} />
              <CodeBlock title="/etc/banner.net" code={`----------------------
Authorized access only
----------------------`} />
              <CodeBlock title="Перезапуск службы" code={`systemctl restart sshd.service`} />
            </Section>

            {/* Timezone */}
            <Section id="timezone" title="Задание 9: Настройка часового пояса" device="Все устройства">
              <DeviceHeading>ISP, BR-SRV, HQ-SRV, CLI (Alt Linux)</DeviceHeading>
              <CodeBlock code={`timedatectl set-timezone Europe/Moscow
timedatectl status`} />
              <DeviceHeading>BR-RTR, HQ-RTR (EcoRouter)</DeviceHeading>
              <CodeBlock code={`ntp timezone utc+3
show ntp timezone`} />
            </Section>
          </Module>
        )}

        {/* ============ MODULE 2 ============ */}
        {(activeModule === "all" || activeModule === "module2") && (
          <Module title="Модуль использования служб в корпоративной сети: Службы и сервисы" time="Samba DC, Docker, NFS, Web">
            {/* Chrony */}
            <Section id="chrony" title="1. Настройка NTP/Chrony" device="ISP + клиенты" defaultOpen>
              <DeviceHeading>ISP — сервер Chrony</DeviceHeading>
              <CodeBlock code={`control chrony server

sed -i 's/pool pool.ntp.org iburst/pool pool.ntp.org iburst prefer minstratum 4/' /etc/chrony.conf
sed -i 's/#local stratum 10/local stratum 5/' /etc/chrony.conf

systemctl restart chronyd
chronyc sources`} />
              <DeviceHeading>Клиенты</DeviceHeading>
              <CodeBlock code={`sed -i 's/pool pool.ntp.org iburst/server 172.16.1.1 iburst/' /etc/chrony.conf
systemctl restart chronyd
chronyc sources`} />
            </Section>

            {/* Nginx */}
            <Section id="nginx" title="2. Nginx reverse proxy + Basic Auth" device="ISP">
              <CodeBlock title="Установка" code={`apt-get update
apt-get install nginx -y`} />
              <CodeBlock title="/etc/nginx/sites-available.d/r-proxy.conf" code={`server {
    listen 80;
    server_name web.au-team.irpo;

    location / {
        proxy_pass http://172.16.1.10:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        auth_basic "Restricted Access";
        auth_basic_user_file /etc/nginx/.htpasswd;
    }
}

server {
    listen 80;
    server_name docker.au-team.irpo;

    location / {
        proxy_pass http://172.16.2.10:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}`} />
              <CodeBlock title="Симлинк и запуск" code={`ln -s /etc/nginx/sites-available.d/r-proxy.conf /etc/nginx/sites-enabled.d/
nginx -t
systemctl enable --now nginx
systemctl status nginx`} />
              <CodeBlock title="HTTP Basic Auth" code={`apt-get install apache2-htpasswd -y
htpasswd -c /etc/nginx/.htpasswd WEB
cat /etc/nginx/.htpasswd

nginx -t
systemctl restart nginx`} />
            </Section>

            {/* Port forwarding */}
            <Section id="portfwd" title="3. Статическая трансляция портов" device="HQ-RTR, BR-RTR">
              <DeviceHeading>HQ-RTR</DeviceHeading>
              <CodeBlock code={`nft add chain nat prerouting { type nat hook prerouting priority dstnat \\; }

nft add rule nat prerouting iif "enp7s1" tcp dport 2026 dnat to 192.168.1.10
nft add rule nat prerouting iif "enp7s1" tcp dport 8080 dnat to 192.168.1.10:80

nft list ruleset
nft list ruleset > /etc/nftables/nftables.nft
systemctl restart nftables
nft list ruleset`} />
              <DeviceHeading>BR-RTR</DeviceHeading>
              <CodeBlock code={`nft add chain nat prerouting { type nat hook prerouting priority dstnat \\; }

nft add rule nat prerouting iif "enp7s1" tcp dport { 8080, 2026 } dnat to 192.168.3.10

nft list ruleset
nft list ruleset > /etc/nftables/nftables.nft
systemctl restart nftables
nft list ruleset`} />
            </Section>

            {/* Samba DC */}
            <Section id="samba" title="5.1 Samba DC" device="BR-SRV">
              <CodeBlock title="Подготовка DNS и сети" code={`echo "nameserver 192.168.1.10" >> /etc/net/ifaces/enp7s1/resolv.conf
systemctl restart network
cat /etc/resolv.conf

ping ya.ru -c 2`} />
              <CodeBlock title="Установка Samba DC" code={`apt-get update
apt-get install -y task-samba-dc
rm -f /etc/samba/smb.conf
rm -rf {/var/lib/samba, /var/cache/samba}
mkdir -p /var/lib/samba/sysvol`} />
              <CodeBlock title="Развёртывание домена" code={`samba-tool domain provision`} />
              <CodeBlock title="Подмена krb5.conf" code={`mv /etc/krb5.conf /etc/krb5.conf.back
cp /var/lib/samba/private/krb5.conf /etc/krb5.conf`} />
              <CodeBlock title="Запуск службы" code={`systemctl enable --now samba
systemctl status samba
samba-tool domain info 127.0.0.1`} />
              <CodeBlock title="Добавление DNS-записей" code={`samba-tool dns add br-srv.au-team.irpo au-team.irpo hq-srv A 192.168.1.10 -U Administrator
samba-tool dns add br-srv.au-team.irpo au-team.irpo hq-rtr A 192.168.1.1 -U Administrator
samba-tool dns add br-srv.au-team.irpo au-team.irpo br-rtr A 192.168.3.1 -U Administrator
samba-tool dns add br-srv.au-team.irpo au-team.irpo web.au-team.irpo A 172.16.1.1 -U Administrator
samba-tool dns add br-srv.au-team.irpo au-team.irpo docker.au-team.irpo A 172.16.2.1 -U Administrator

samba-tool dns query br-srv.au-team.irpo au-team.irpo @ ALL -U administrator`} />
              <CodeBlock title="Перевод DNS на локальный Samba DNS" code={`sed -i 's/nameserver 192.168.1.10/nameserver 127.0.0.1/' /etc/net/ifaces/enp7s1/resolv.conf
systemctl restart network
cat /etc/resolv.conf`} />
              <CodeBlock title="Создание групп и пользователей" code={`samba-tool group add hq

for i in {1..5}; do samba-tool user add hquser$i P@ssw0rd; done
for i in {1..5}; do samba-tool group addmembers hq hquser$i; done

samba-tool group listmembers hq`} />
            </Section>

            {/* Domain join */}
            <Section id="domain" title="5.2 Ввод HQ-CLI в домен" device="HQ-RTR, HQ-CLI">
              <DeviceHeading>HQ-RTR — настройка DNS</DeviceHeading>
              <CodeBlock code={`sed -i 's/192.168.1.10/192.168.3.10/' /etc/dnsmasq.conf
systemctl restart dnsmasq
cat /etc/dnsmasq.conf`} />
              <DeviceHeading>HQ-CLI — ограничение входа группой hq</DeviceHeading>
              <CodeBlock code={`control libnss-role
roleadd hq wheel`} />
              <CodeBlock title="Ограничение sudo (/etc/sudoers)" code={`WHEEL_USERS ALL=(ALL:ALL) /usr/bin/cat, /usr/bin/grep, /usr/bin/id`} />
              <CodeBlock title="Проверка" code={`sudo id`} />
            </Section>

            {/* Ansible */}
            <Section id="ansible" title="5.3 Ansible" device="BR-SRV">
              <CodeBlock title="Установка" code={`apt-get install ansible sshpass -y`} />
              <CodeBlock title="/etc/ansible/ansible.cfg" code={`[defaults]
host_key_checking = False
interpreter_python = /usr/bin/python3`} />
              <CodeBlock title="/etc/ansible/hosts" code={`HQ-SRV ansible_user=user ansible_password=resu ansible_port=2026
HQ-RTR ansible_user=net_admin ansible_password=P@ssw0rd
BR-RTR ansible_user=net_admin ansible_password=P@ssw0rd
HQ-CLI ansible_user=user ansible_password=resu`} />
              <CodeBlock title="Проверка" code={`ansible all -m ping`} />
            </Section>

            {/* Docker */}
            <Section id="docker" title="5.4 Docker" device="BR-SRV">
              <CodeBlock title="Установка и загрузка образов" code={`apt-get install docker-engine docker-compose-v2 -y
systemctl enable --now docker.service

mount -o loop /dev/sr0 /mnt/ -v
ls -l /mnt/docker/
cat /mnt/docker/readme.txt

docker load < /mnt/docker/site_latest.tar
docker load < /mnt/docker/mariadb_latest.tar
docker image ls`} />
              <CodeBlock title="docker-compose.yml" code={`services:
  database:
    container_name: db
    image: mariadb:latest
    restart: always
    ports:
      - "3306:3306"
    environment:
      MARIADB_DATABASE: testdb
      MARIADB_USER: test
      MARIADB_PASSWORD: P@ssw0rd
      MARIADB_ROOT_PASSWORD: P@ssw0rd
    volumes:
      - db_data:/var/lib/mysql

  app:
    container_name: testapp
    image: site:latest
    restart: always
    ports:
      - "8080:8000"
    environment:
      DB_HOST: database
      DB_PORT: 3306
      DB_NAME: testdb
      DB_USER: test
      DB_PASS: P@ssw0rd
      DB_TYPE: maria
    depends_on:
      - database

volumes:
  db_data:`} />
              <CodeBlock title="Запуск" code={`docker compose config
docker compose up -d
docker ps
ss -ltnp4 | grep 8080`} />
              <Note>
                Проверка с HQ-CLI: <code className="font-mono">http://docker.au-team.irpo</code> и{" "}
                <code className="font-mono">http://192.168.3.10:8080</code>
              </Note>
              <CodeBlock title="Пересоздать стек (если нужно)" code={`docker rm -f $(docker ps -qa)
docker compose up -d`} />
            </Section>

            {/* RAID0 */}
            <Section id="raid" title="6. RAID0" device="HQ-SRV">
              <CodeBlock title="Разметка дисков" code={`lsblk
parted /dev/sdb`} />
              <CodeBlock title="В parted (для /dev/sdb и /dev/sdc)" code={`mklabel msdos
mkpart primary 1MiB 100%
set 1 raid on
print

# затем для второго диска:
select /dev/sdc`} />
              <CodeBlock title="Создание массива" code={`mdadm --create /dev/md0 --level=0 --raid-devices=2 /dev/sdb1 /dev/sdc1
mdadm --detail --scan >> /etc/mdadm.conf
mkfs.ext4 /dev/md0
mkdir /raid
cp /etc/fstab /etc/fstab.back
echo "/dev/md0 /raid ext4 defaults 0 0" >> /etc/fstab
mount -av
df -T`} />
            </Section>

            {/* NFS */}
            <Section id="nfs" title="7. NFS и автомонтирование" device="HQ-SRV, HQ-CLI">
              <DeviceHeading>HQ-SRV</DeviceHeading>
              <CodeBlock code={`apt-get update
apt-get install nfs-server nfs-utils -y
mkdir /raid/nfs
chmod 777 /raid/nfs
cp /etc/exports /etc/exports.back
echo "/raid/nfs 192.168.2.0/27(rw,no_subtree_check,no_root_squash)" >> /etc/exports
systemctl enable --now nfs-server`} />
              <DeviceHeading>HQ-CLI</DeviceHeading>
              <CodeBlock code={`mkdir /mnt/nfs
chmod -R 777 /mnt/nfs
showmount -e hq-srv
cp /etc/fstab /etc/fstab.back
echo "192.168.1.10:/raid/nfs /mnt/nfs nfs rw,soft,_netdev 0 0" >> /etc/fstab
mount -av
df -T`} />
              <Note>Проверка: создать файл в <code className="font-mono">/mnt/nfs</code> и увидеть его на стороне сервера.</Note>
            </Section>

            {/* Web app */}
            <Section id="web" title="8. Веб-приложение (LAMP)" device="HQ-SRV, HQ-CLI">
              <CodeBlock title="Установка LAMP и копирование файлов" code={`mount -o loop /dev/sr0 /mnt/ -v
apt-get install lamp-server -y
cp /mnt/web/index.php /var/www/html
cp /mnt/web/logo.png /var/www/html

systemctl enable --now mariadb`} />
              <CodeBlock title="БД и пользователь" code={`mariadb -e "CREATE DATABASE webdb;"
mariadb -e "
CREATE USER 'web'@'localhost' IDENTIFIED BY 'P@ssw0rd';
GRANT ALL PRIVILEGES ON webdb.* TO 'web'@'localhost';
"`} />
              <CodeBlock title="Импорт дампа" code={`mariadb webdb < /mnt/web/dump.sql
mariadb -e "USE webdb; SHOW TABLES;"`} />
              <CodeBlock title="index.php — параметры подключения" code={`$servername = "localhost";
$username = "web";
$password = "P@ssw0rd";
$dbname = "webdb";`} />
              <CodeBlock title="Запуск веб-сервера" code={`systemctl enable --now httpd2.service`} />
              <Note>
                Проверка на HQ-CLI: открыть <code className="font-mono">web.au-team.irpo</code>, авторизация{" "}
                <code className="font-mono">WEB / P@ssw0rd</code>
              </Note>
            </Section>

            {/* Yandex */}
            <Section id="yandex" title="10. Установка Яндекс Браузера" device="HQ-CLI">
              <CodeBlock code={`apt-get update
apt-get install yandex-browser-stable -y`} />
            </Section>

            {/* Checklist */}
            <div className="mt-6 rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-3">Чек-лист перед сдачей</h3>
              <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                {[
                  "Chrony на ISP работает",
                  "Nginx reverse proxy и Basic Auth подняты",
                  "NAT портов на HQ-RTR и BR-RTR настроен",
                  "Samba DC на BR-SRV создан",
                  "Пользователи hquser1..hquser5 добавлены в группу hq",
                  "Ansible с BR-SRV отвечает pong",
                  "Docker-стек на BR-SRV работает",
                  "RAID0 и NFS на HQ-SRV настроены",
                  "Веб-приложение на HQ-SRV запускается",
                  "Яндекс Браузер установлен на HQ-CLI",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Module>
        )}
      </main>

      <footer className="border-t border-border py-6">
        <div className="max-w-5xl mx-auto px-4 text-center text-xs text-muted-foreground">
          Шпаргалка-подстраховка. Нажмите на блок и используйте кнопку копирования.
        </div>
      </footer>
    </div>
  )
}
