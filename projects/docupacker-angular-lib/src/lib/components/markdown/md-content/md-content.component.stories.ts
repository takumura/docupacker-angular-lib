import { Meta, StoryObj } from '@storybook/angular';
import { MdContentComponent } from './md-content.component';

const meta: Meta<MdContentComponent> = {
  title: 'Components/Markdown/Content',
  component: MdContentComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<MdContentComponent>;

export const Loading: Story = {
  args: {
    doc: {
      docRef: '',
      content: {
        title: 'テストドキュメントのタイトル',
        date: '2024-01-01',
        category: 'Angular',
        tag: ['angular', 'test', 'tag'],
        toc: '',
        body: '',
        bodyHtml: '<p>scoopを利用して、開発環境の自動セットアップ、および最新版への定期的なアップデートなどの管理を上手に行えるのか試してみます。</p>\n\n<docup-loading-bar></docup-loading-bar [loading]="true">\n<p>loading barの表示テスト</p>\n<div class=\"gist\">\n  <script src=\"https://gist.github.com/takumura/f897ab722e0d55523243dcfe7a51d4c1.js?file=install-scoop.ps1\"></script>\n</div>\n<div class=\"gist\">\n  <script src=\"https://gist.github.com/takumura/f897ab722e0d55523243dcfe7a51d4c1.js?file=env-setup-common.ps1\"></script>\n</div>\n<div class=\"gist\">\n  <script src=\"https://gist.github.com/takumura/f897ab722e0d55523243dcfe7a51d4c1.js?file=env-setup-dev.ps1\"></script>\n</div>\n'
      },
    },
  },
};

// "<p>scoopを利用して、開発環境の自動セットアップ、および最新版への定期的なアップデートなどの管理を上手に行えるのか試してみます</p>\n<p>test line</p>\n<docup-loading-bar></docup-loading-bar>"

// <p>scoopを利用して、開発環境の自動セットアップ、および最新版への定期的なアップデートなどの管理を上手に行えるのか試してみます。</p>\n<h2 id=\"インストール\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#インストール\"><span class=\"icon icon-link\"></span></a>インストール</h2>\n<p>まず初めに<a href=\"https://scoop.sh/\" target=\"_blank\" rel=\"noopener\">公式サイト</a>と<a href=\"https://github.com/lukesampson/scoop\" target=\"_blank\" rel=\"noopener\">GitHub リポジトリ</a>を確認しました。インストールはPowerShellスクリプトで行うと書いてあるので、その通りに実行しました。</p>\n<pre class=\"language-powershell\"><code class=\"language-powershell code-highlight\"><span class=\"code-line line-number\" line=\"1\">> <span class=\"token function\">Invoke-Expression</span> <span class=\"token punctuation\">(</span><span class=\"token function\">New-Object</span> System<span class=\"token punctuation\">.</span>Net<span class=\"token punctuation\">.</span>WebClient<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span>DownloadString<span class=\"token punctuation\">(</span><span class=\"token string\">'https://get.scoop.sh'</span><span class=\"token punctuation\">)</span>\n</span><span class=\"code-line line-number\" line=\"2\">Initializing<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>\n</span><span class=\"code-line line-number\" line=\"3\">Downloading scoop<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>\n</span><span class=\"code-line line-number\" line=\"4\">Extracting<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>\n</span><span class=\"code-line line-number\" line=\"5\">Creating shim<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>\n</span><span class=\"code-line line-number\" line=\"6\">Downloading main bucket<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>\n</span><span class=\"code-line line-number\" line=\"7\">Extracting<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>\n</span><span class=\"code-line line-number\" line=\"8\">Adding ~\\scoop\\shims to your path<span class=\"token punctuation\">.</span>\n</span><span class=\"code-line line-number\" line=\"9\"><span class=\"token string\">'lastupdate'</span> has been <span class=\"token function\">set</span> to <span class=\"token string\">'2019-11-01T17:22:42.8161465+09:00'</span>\n</span><span class=\"code-line line-number\" line=\"10\">Scoop was installed successfully!\n</span><span class=\"code-line line-number\" line=\"11\"><span class=\"token function\">Type</span> <span class=\"token string\">'scoop help'</span> <span class=\"token keyword\">for</span> instructions<span class=\"token punctuation\">.</span>\n</span></code></pre>\n<p>ログインしているアカウントのユーザフォルダ以下に<code>scoop</code>フォルダが作成されました。scoopで管理されるAppはこのフォルダ以下に配置されるようです。</p>\n<h2 id=\"bucket-の設定\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#bucket-の設定\"><span class=\"icon icon-link\"></span></a>Bucket の設定</h2>\n<p>デフォルトではmain backetが利用可能です。<code>bucket add</code>コマンドにより、bucketを追加することができます。追加可能な bucketは<code>scoop\\apps\\scoop\\current\\buckets.json</code>で設定されており、<code>bucket known</code>コマンドで見る事もできます。</p>\n<pre class=\"language-powershell\"><code class=\"language-powershell code-highlight\"><span class=\"code-line line-number\" line=\"1\">> scoop bucket known\n</span><span class=\"code-line line-number\" line=\"2\">main\n</span><span class=\"code-line line-number\" line=\"3\">extras\n</span><span class=\"code-line line-number\" line=\"4\">nightlies\n</span><span class=\"code-line line-number\" line=\"5\">nirsoft\n</span><span class=\"code-line line-number\" line=\"6\">php\n</span><span class=\"code-line line-number\" line=\"7\">nerd-fonts\n</span><span class=\"code-line line-number\" line=\"8\">nonportable\n</span><span class=\"code-line line-number\" line=\"9\">java\n</span><span class=\"code-line line-number\" line=\"10\">games\n</span><span class=\"code-line line-number\" line=\"11\">jetbrains\n</span></code></pre>\n<p>以前から利用しているAppがextrasにありそうだったので、追加しました。</p>\n<pre class=\"language-powershell\"><code class=\"language-powershell code-highlight\"><span class=\"code-line line-number\" line=\"1\">> scoop bucket add extras\n</span><span class=\"code-line line-number\" line=\"2\">Checking repo<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span> ok\n</span><span class=\"code-line line-number\" line=\"3\">The extras bucket was added successfully<span class=\"token punctuation\">.</span>\n</span></code></pre>\n<p>gitがインストールされていないとbucketの追加に失敗します。その場合はgitを先にインストールします。</p>\n<pre class=\"language-powershell\"><code class=\"language-powershell code-highlight\"><span class=\"code-line line-number\" line=\"1\">scoop install git\n</span></code></pre>\n<h2 id=\"よく使うであろうコマンド\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#よく使うであろうコマンド\"><span class=\"icon icon-link\"></span></a>よく使うであろうコマンド</h2>\n<h3 id=\"scoop-search\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#scoop-search\"><span class=\"icon icon-link\"></span></a>scoop search</h3>\n<p>指定したAppがBucket(collections of apps)にあるか検索する。</p>\n<pre class=\"language-powershell\"><code class=\"language-powershell code-highlight\"><span class=\"code-line line-number\" line=\"1\">> scoop search nodejs\n</span><span class=\"code-line line-number\" line=\"2\"><span class=\"token string\">'main'</span> bucket:\n</span><span class=\"code-line line-number\" line=\"3\">    nodejs-lts <span class=\"token punctuation\">(</span>12<span class=\"token punctuation\">.</span>13<span class=\"token punctuation\">.</span>0<span class=\"token punctuation\">)</span>\n</span><span class=\"code-line line-number\" line=\"4\">    nodejs <span class=\"token punctuation\">(</span>13<span class=\"token punctuation\">.</span>1<span class=\"token punctuation\">.</span>0<span class=\"token punctuation\">)</span>\n</span><span class=\"code-line line-number\" line=\"5\">\n</span><span class=\"code-line line-number\" line=\"6\">> scoop search keepass\n</span><span class=\"code-line line-number\" line=\"7\"><span class=\"token string\">'extras'</span> bucket:\n</span><span class=\"code-line line-number\" line=\"8\">    keepass-plugin-keeagent <span class=\"token punctuation\">(</span>0<span class=\"token punctuation\">.</span>10<span class=\"token punctuation\">.</span>1<span class=\"token punctuation\">)</span>\n</span><span class=\"code-line line-number\" line=\"9\">    keepass-plugin-keeanywhere <span class=\"token punctuation\">(</span>1<span class=\"token punctuation\">.</span>5<span class=\"token punctuation\">.</span>1<span class=\"token punctuation\">)</span>\n</span><span class=\"code-line line-number\" line=\"10\">    keepass-plugin-keepassnatmsg <span class=\"token punctuation\">(</span>2<span class=\"token punctuation\">.</span>0<span class=\"token punctuation\">.</span>6<span class=\"token punctuation\">)</span>\n</span><span class=\"code-line line-number\" line=\"11\">    keepass-plugin-keepassrpc <span class=\"token punctuation\">(</span>1<span class=\"token punctuation\">.</span>9<span class=\"token punctuation\">.</span>0<span class=\"token punctuation\">)</span>\n</span><span class=\"code-line line-number\" line=\"12\">    keepass-plugin-keetraytotp <span class=\"token punctuation\">(</span>0<span class=\"token punctuation\">.</span>99-Beta<span class=\"token punctuation\">)</span>\n</span><span class=\"code-line line-number\" line=\"13\">    keepass-plugin-sequencer <span class=\"token punctuation\">(</span>0<span class=\"token punctuation\">.</span>1<span class=\"token punctuation\">.</span>1<span class=\"token punctuation\">)</span>\n</span><span class=\"code-line line-number\" line=\"14\">    keepass-plugin-yafd <span class=\"token punctuation\">(</span>1<span class=\"token punctuation\">.</span>2<span class=\"token punctuation\">.</span>2<span class=\"token punctuation\">.</span>0<span class=\"token punctuation\">)</span>\n</span><span class=\"code-line line-number\" line=\"15\">    keepass <span class=\"token punctuation\">(</span>2<span class=\"token punctuation\">.</span>43<span class=\"token punctuation\">)</span>\n</span><span class=\"code-line line-number\" line=\"16\">    keepassxc <span class=\"token punctuation\">(</span>2<span class=\"token punctuation\">.</span>5<span class=\"token punctuation\">.</span>0<span class=\"token punctuation\">)</span>\n</span></code></pre>\n<h3 id=\"scoop-install\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#scoop-install\"><span class=\"icon icon-link\"></span></a>scoop install</h3>\n<p>指定したAppをインストールする。</p>\n<pre class=\"language-powershell\"><code class=\"language-powershell code-highlight\"><span class=\"code-line line-number\" line=\"1\">> scoop install 7zip\n</span><span class=\"code-line line-number\" line=\"2\">Updating Scoop<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>\n</span><span class=\"code-line line-number\" line=\"3\">Updating <span class=\"token string\">'main'</span> bucket<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>\n</span><span class=\"code-line line-number\" line=\"4\">Checking repo<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span> ok\n</span><span class=\"code-line line-number\" line=\"5\">The main bucket was added successfully<span class=\"token punctuation\">.</span>\n</span><span class=\"code-line line-number\" line=\"6\">Scoop was updated successfully!\n</span><span class=\"code-line line-number\" line=\"7\">Installing <span class=\"token string\">'7zip'</span> <span class=\"token punctuation\">(</span>19<span class=\"token punctuation\">.</span>00<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">[</span>64bit<span class=\"token punctuation\">]</span>\n</span><span class=\"code-line line-number\" line=\"8\">7z1900-x64<span class=\"token punctuation\">.</span>msi <span class=\"token punctuation\">(</span>1<span class=\"token punctuation\">.</span>7 MB<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">[</span>===============================================================================================<span class=\"token punctuation\">]</span> 100%\n</span><span class=\"code-line line-number\" line=\"9\">Checking hash of 7z1900-x64<span class=\"token punctuation\">.</span>msi <span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span> ok<span class=\"token punctuation\">.</span>\n</span><span class=\"code-line line-number\" line=\"10\">Extracting 7z1900-x64<span class=\"token punctuation\">.</span>msi <span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span> done<span class=\"token punctuation\">.</span>\n</span><span class=\"code-line line-number\" line=\"11\">Linking ~\\scoop\\apps\\7zip\\current => ~\\scoop\\apps\\7zip\\19<span class=\"token punctuation\">.</span>00\n</span><span class=\"code-line line-number\" line=\"12\">Creating shim <span class=\"token keyword\">for</span> <span class=\"token string\">'7z'</span><span class=\"token punctuation\">.</span>\n</span><span class=\"code-line line-number\" line=\"13\">Creating shortcut <span class=\"token keyword\">for</span> 7-Zip <span class=\"token punctuation\">(</span>7zFM<span class=\"token punctuation\">.</span>exe<span class=\"token punctuation\">)</span>\n</span><span class=\"code-line line-number\" line=\"14\"><span class=\"token string\">'7zip'</span> <span class=\"token punctuation\">(</span>19<span class=\"token punctuation\">.</span>00<span class=\"token punctuation\">)</span> was installed successfully!\n</span></code></pre>\n<h2 id=\"scoop-update\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#scoop-update\"><span class=\"icon icon-link\"></span></a>scoop update</h2>\n<p><code>scoop udpate</code>コマンドでscoop自体とインストール可能なAppの情報（app manifest）を更新できます。セミコロンで続けて<code>scoop update *</code>とすることで、インストール済みのすべてのAppに対して、バージョンアップのチェックおよびAppの更新ができます。</p>\n<pre class=\"language-powershell\"><code class=\"language-powershell code-highlight\"><span class=\"code-line line-number\" line=\"1\">> scoop update<span class=\"token punctuation\">;</span> scoop update <span class=\"token operator\">*</span>\n</span><span class=\"code-line line-number\" line=\"2\">Updating Scoop<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>\n</span><span class=\"code-line line-number\" line=\"3\">Updating <span class=\"token string\">'extras'</span> bucket<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>\n</span><span class=\"code-line line-number\" line=\"4\"> <span class=\"token operator\">*</span> 4366eadd vscodium: Update to version 1<span class=\"token punctuation\">.</span>40<span class=\"token punctuation\">.</span>0                           2 hours ago\n</span><span class=\"code-line line-number\" line=\"5\"> <span class=\"token operator\">*</span> 3ade6589 vscodium-portable: Update to version 1<span class=\"token punctuation\">.</span>40<span class=\"token punctuation\">.</span>0                  2 hours ago\n</span><span class=\"code-line line-number\" line=\"6\"> <span class=\"token operator\">*</span> 88e85c64 vivaldi: Update to version 2<span class=\"token punctuation\">.</span>9<span class=\"token punctuation\">.</span>1705<span class=\"token punctuation\">.</span>41                       2 hours ago\n</span><span class=\"code-line line-number\" line=\"7\">Updating <span class=\"token string\">'main'</span> bucket<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>\n</span><span class=\"code-line line-number\" line=\"8\"> <span class=\"token operator\">*</span> 124c0c6a ffmpeg-nightly: Update to version 20191108-e700038           2 hours ago\n</span><span class=\"code-line line-number\" line=\"9\"> <span class=\"token operator\">*</span> 20998cde annie: Update to version 0<span class=\"token punctuation\">.</span>9<span class=\"token punctuation\">.</span>6                               2 hours ago\n</span><span class=\"code-line line-number\" line=\"10\"> <span class=\"token operator\">*</span> 41fcafae terraform-provider-ibm: Update to version 0<span class=\"token punctuation\">.</span>19<span class=\"token punctuation\">.</span>0             3 hours ago\n</span><span class=\"code-line line-number\" line=\"11\"> <span class=\"token operator\">*</span> 94629c47 jx: Update to version 2<span class=\"token punctuation\">.</span>0<span class=\"token punctuation\">.</span>971                                3 hours ago\n</span><span class=\"code-line line-number\" line=\"12\"> <span class=\"token operator\">*</span> b017d181 faas-<span class=\"token function\">cli</span>: Update to version 0<span class=\"token punctuation\">.</span>10<span class=\"token punctuation\">.</span>3                           3 hours ago\n</span><span class=\"code-line line-number\" line=\"13\">Scoop was updated successfully!\n</span><span class=\"code-line line-number\" line=\"14\">Latest versions <span class=\"token keyword\">for</span> all apps are installed! <span class=\"token keyword\">For</span> more information <span class=\"token keyword\">try</span> <span class=\"token string\">'scoop status'</span>\n</span></code></pre>\n<h2 id=\"アンインストール\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#アンインストール\"><span class=\"icon icon-link\"></span></a>アンインストール</h2>\n<p>追加でインストールするAp は<code>C:\\Apps</code>以下にまとめるルールにしていたので、scoopをインストールし直すことにします。</p>\n<pre class=\"language-powershell\"><code class=\"language-powershell code-highlight\"><span class=\"code-line line-number\" line=\"1\">> scoop uninstall scoop\n</span><span class=\"code-line line-number\" line=\"2\">WARN  This will uninstall Scoop and all the programs that have been installed with Scoop!\n</span><span class=\"code-line line-number\" line=\"3\">Are you sure? <span class=\"token punctuation\">(</span>yN<span class=\"token punctuation\">)</span>: y\n</span><span class=\"code-line line-number\" line=\"4\">Uninstalling <span class=\"token string\">'7zip'</span>\n</span><span class=\"code-line line-number\" line=\"5\">Removing shim <span class=\"token keyword\">for</span> <span class=\"token string\">'7z'</span><span class=\"token punctuation\">.</span>\n</span><span class=\"code-line line-number\" line=\"6\">WARN  Couldn<span class=\"token string\">'t remove ~\\scoop\\apps\\7zip: 項目 C:\\Users\\takum\\scoop\\apps\\7zip\\19.00\\7-zip.dll を削除できません: パス '</span>7-zip<span class=\"token punctuation\">.</span>dll<span class=\"token string\">' へのアクセスが拒否されました。.Exception\n</span></span><span class=\"code-line line-number\" line=\"7\"><span class=\"token string\">Uninstalling '</span>winmerge<span class=\"token string\">'\n</span></span><span class=\"code-line line-number\" line=\"8\"><span class=\"token string\">Removing shim for '</span>WinMergeU<span class=\"token string\">'.\n</span></span><span class=\"code-line line-number\" line=\"9\"><span class=\"token string\">Couldn'</span>t remove ~\\scoop\\apps: 項目 C:\\Users\\takum\\scoop\\apps\\7zip\\19<span class=\"token punctuation\">.</span>00\\7-zip<span class=\"token punctuation\">.</span>dll を削除できません: パス <span class=\"token string\">'7-zip.dll'</span>\n</span><span class=\"code-line line-number\" line=\"10\">へのアクセスが拒否されました。\n</span></code></pre>\n<p>7zipインストール後にエクスプローラ統合の設定をしたために<code>7-zip.dll</code>が削除できなくなっていました。設定を解除して再起動後、アンインストールをやり直します。</p>\n<pre class=\"language-powershell\"><code class=\"language-powershell code-highlight\"><span class=\"code-line line-number\" line=\"1\">scoop uninstall scoop\n</span><span class=\"code-line line-number\" line=\"2\">WARN  This will uninstall Scoop and all the programs that have been installed with Scoop!\n</span><span class=\"code-line line-number\" line=\"3\">Are you sure? <span class=\"token punctuation\">(</span>yN<span class=\"token punctuation\">)</span>: y\n</span><span class=\"code-line line-number\" line=\"4\">Uninstalling <span class=\"token string\">'7zip'</span>\n</span><span class=\"code-line line-number\" line=\"5\">WARN  Shim <span class=\"token keyword\">for</span> <span class=\"token string\">'7z'</span> is missing<span class=\"token punctuation\">.</span> Skipping<span class=\"token punctuation\">.</span>\n</span><span class=\"code-line line-number\" line=\"6\">Removing ~\\scoop\\shims <span class=\"token keyword\">from</span> your path<span class=\"token punctuation\">.</span>\n</span><span class=\"code-line line-number\" line=\"7\">Scoop has been uninstalled<span class=\"token punctuation\">.</span>\n</span></code></pre>\n<p>今度は正常にアンインストール処理が完走しました。</p>\n<h2 id=\"カスタムディレクトリに-scoop-をインストール\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#カスタムディレクトリに-scoop-をインストール\"><span class=\"icon icon-link\"></span></a>カスタムディレクトリに scoop をインストール</h2>\n<p>公式wikiの<a href=\"https://github.com/lukesampson/scoop/wiki/Quick-Start#installing-scoop-to-custom-directory\" target=\"_blank\" rel=\"noopener\">Installing Scoop to Custom Directory</a>を参考にして、<code>C:\\Apps\\scoop</code>以下にscoopをインストールします。</p>\n<pre class=\"language-powershell\"><code class=\"language-powershell code-highlight\"><span class=\"code-line line-number\" line=\"1\"><span class=\"token variable\">$env</span>:SCOOP=<span class=\"token string\">'C:\\Apps\\scoop'</span>\n</span><span class=\"code-line line-number\" line=\"2\"><span class=\"token namespace\">[environment]</span>::setEnvironmentVariable<span class=\"token punctuation\">(</span><span class=\"token string\">'SCOOP'</span><span class=\"token punctuation\">,</span><span class=\"token variable\">$env</span>:SCOOP<span class=\"token punctuation\">,</span><span class=\"token string\">'User'</span><span class=\"token punctuation\">)</span>\n</span><span class=\"code-line line-number\" line=\"3\"><span class=\"token function\">Invoke-Expression</span> <span class=\"token punctuation\">(</span><span class=\"token function\">New-Object</span> System<span class=\"token punctuation\">.</span>Net<span class=\"token punctuation\">.</span>WebClient<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span>DownloadString<span class=\"token punctuation\">(</span><span class=\"token string\">'https://get.scoop.sh'</span><span class=\"token punctuation\">)</span>\n</span></code></pre>\n<h2 id=\"app-manifest-について\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#app-manifest-について\"><span class=\"icon icon-link\"></span></a>App Manifest について</h2>\n<p>公式が提供していないApp Manifestは自分で作ることも可能です。詳細な方法は<a href=\"https://github.com/lukesampson/scoop/wiki/Creating-an-app-manifest\" target=\"_blank\" rel=\"noopener\">Creating an app manifest</a>に書かれています。</p>\n<h2 id=\"scoopを用いた環境セットアップスクリプト\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#scoopを用いた環境セットアップスクリプト\"><span class=\"icon icon-link\"></span></a>scoopを用いた環境セットアップスクリプト</h2>\n<div class=\"gist\">\n  <script src=\"https://gist.github.com/takumura/f897ab722e0d55523243dcfe7a51d4c1.js?file=install-scoop.ps1\"></script>\n</div>\n<div class=\"gist\">\n  <script src=\"https://gist.github.com/takumura/f897ab722e0d55523243dcfe7a51d4c1.js?file=env-setup-common.ps1\"></script>\n</div>\n<div class=\"gist\">\n  <script src=\"https://gist.github.com/takumura/f897ab722e0d55523243dcfe7a51d4c1.js?file=env-setup-dev.ps1\"></script>\n</div>\n<h2 id=\"作業時に参照した情報\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#作業時に参照した情報\"><span class=\"icon icon-link\"></span></a>作業時に参照した情報</h2>\n<p><a href=\"https://github.com/lukesampson/scoop/wiki\" target=\"_blank\" rel=\"noopener\">scoop wiki - GitHub</a></p>