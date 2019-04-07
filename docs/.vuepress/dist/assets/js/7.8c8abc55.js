(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{173:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),a("p",[t._v("注意：默认使用的是H2Database，如需MySQL，将H2Database相关的配置注释或者删掉，再把MySql的相关配置取消注释即可。")]),t._v(" "),a("p",[t._v("详解：")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),a("table",[t._m(17),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("0.0.7")]),t._v(" "),a("td",[t._v("2018/08/31")]),t._v(" "),a("td",[a("a",{attrs:{href:"http://static.ryanc.cc/halo/releases/halo-0.0.7.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("ZIP"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("0.0.9")]),t._v(" "),a("td",[t._v("2018/10/14")]),t._v(" "),a("td",[a("a",{attrs:{href:"http://static.ryanc.cc/halo/releases/halo-0.0.9.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("ZIP"),a("OutboundLink")],1)])])])]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._m(28),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._m(42),t._v(" "),t._m(43)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"下载安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 下载安装")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"环境要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境要求","aria-hidden":"true"}},[this._v("#")]),this._v(" 环境要求")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("JDK1.8以上。")]),t._v(" "),a("li",[t._v("Maven3.x。")]),t._v(" "),a("li",[t._v("数据库\n"),a("ul",[a("li",[t._v("MySQL5.5以上")]),t._v(" "),a("li",[t._v("MariaDB")]),t._v(" "),a("li",[t._v("或者直接使用H2Database，免安装。")])])]),t._v(" "),a("li",[t._v("Git")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("需要注意的是：如果使用一键安装脚本（后面会讲到），那么你只需要安装数据库即可（如果使用MySQL或者MariaDB的话）。如果不使用MySQL或者MariaDB，那么你什么都不需要安装，直接执行脚本即可。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"二进制安装（不推荐）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二进制安装（不推荐）","aria-hidden":"true"}},[this._v("#")]),this._v(" 二进制安装（不推荐）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("这种方式安装非常简单且快速（但是并不方便升级），你只需要下载安装包上传到服务器上解压运行即可，需要注意的是，运行之前别忘了参考下面的配置修改application.yaml文件。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"配置文件详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件详解","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置文件详解")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datasource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" com.alibaba.druid.pool.DruidDataSource\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# H2database 配置")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("driver-class-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.h2.Driver\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jdbc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("h2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("~/halo/halo\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" admin\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# MySql配置")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#driver-class-name: com.mysql.jdbc.Driver")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#url: jdbc:mysql://127.0.0.1:3306/halodb?characterEncoding=utf8&useSSL=false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#username: root")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#password: 123456")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("settings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("web-allow-others")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /h2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("console\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[a("code",[t._v("server.port")]),t._v(": 运行程序的端口，默认8080。当然你要修改成6666也行，然后你访问的地址就是"),a("code",[t._v("localhost:6666")]),t._v("（使用halo-cli部署可以提示输入并修改）")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("spring.datasource.type")]),t._v(": 数据源类型，不需要修改。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("spring.datasource.driver-class-name")]),t._v(": 数据库驱动程序，不需要修改。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("spring.datasource.url")]),t._v(": 数据库物理文件路径，建议不要修改。默认是*~/halo/halo*。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("spring.datasource.username")]),t._v(": 数据库用户名，一定要修改，这是可以自定义的（使用halo-cli部署可以提示输入并修改）。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("spring.datasource.password")]),t._v(": 数据库密码，一定要修改，这也是可以自定义的（使用halo-cli部署可以提示输入并修改）。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("spring.h2.console.settings.web-allow-others")]),t._v(": 是否启用h2数据库可视化后台。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("spring.h2.console.path")]),t._v(": h2数据库可视化后台路径，可以自定义。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("spring.h2.console.enabled:")]),t._v(": 是否启动H2控制台。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("如果对h2数据库不熟悉，可以上网搜一下相关信息，非常好的一个嵌入式数据库。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"如何运行halo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何运行halo","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何运行Halo")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[t._v("上传安装包到服务器。")]),t._v(" "),a("li",[t._v("解压安装包。")]),t._v(" "),a("li",[t._v("修改配置文件（数据库配置）。")]),t._v(" "),a("li",[t._v("执行"),a("code",[t._v("sh halo.sh start")]),t._v("。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"如何升级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何升级","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何升级")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("上传新的安装包到服务器。")]),this._v(" "),s("li",[this._v("解压覆盖之前的文件。")]),this._v(" "),s("li",[this._v("执行"),s("code",[this._v("sh halo.sh restart")]),this._v("。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"其他命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他命令","aria-hidden":"true"}},[this._v("#")]),this._v(" 其他命令")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("启动Halo : "),a("code",[t._v("sh halo.sh start")])]),t._v(" "),a("li",[t._v("停止Halo : "),a("code",[t._v("sh halo.sh stop")])]),t._v(" "),a("li",[t._v("重启Halo : "),a("code",[t._v("sh halo.sh restart")])]),t._v(" "),a("li",[t._v("查看状态 : "),a("code",[t._v("sh halo.sh status")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"发布版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布版本","aria-hidden":"true"}},[this._v("#")]),this._v(" 发布版本")])},function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",[this._v("版本号")]),this._v(" "),s("th",[this._v("发布日期")]),this._v(" "),s("th",[this._v("下载")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"源码安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#源码安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 源码安装")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"一键安装脚本（方式一）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一键安装脚本（方式一）","aria-hidden":"true"}},[this._v("#")]),this._v(" 一键安装脚本（方式一）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项","aria-hidden":"true"}},[this._v("#")]),this._v(" 注意事项")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("如果脚本出现错误，请使用"),s("strong",[this._v("dos2unix")]),this._v("转换一下。")]),this._v(" "),s("li",[this._v("安装过程中会提示输入一些信息，如运行端口，数据库配置等信息，请知晓。")]),this._v(" "),s("li",[this._v("下载依赖过程中可能会比较久，通常在10-15分钟。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"执行自动安装脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行自动安装脚本","aria-hidden":"true"}},[this._v("#")]),this._v(" 执行自动安装脚本")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -O halo-cli.sh https://git.io/fxHqp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" halo-cli.sh -i\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"如何运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何运行","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何运行")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("耐心等待安装完成之后，执行"),s("code",[this._v("systemctl start halo")]),this._v("或"),s("code",[this._v("service halo start")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"如何更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何更新","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何更新")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("bash")]),this._v(" halo-cli.sh -u\nsystemctl restart halo 或者 "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("service")]),this._v(" halo restart\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"如何加入开机自启"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何加入开机自启","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何加入开机自启")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("systemctl "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("enable")]),this._v(" halo\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"自动打包脚本（方式二）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动打包脚本（方式二）","aria-hidden":"true"}},[this._v("#")]),this._v(" 自动打包脚本（方式二）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("这种安装方式适用于所有Linux发行版，其中，"),s("strong",[this._v("deploy.sh")]),this._v("在项目根目录。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"注意事项-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 注意事项")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("服务器为Linux。")]),this._v(" "),s("li",[this._v("JDK1.8以上（需要自己配置）。")]),this._v(" "),s("li",[this._v("Maven3.x（需要自己配置）。")]),this._v(" "),s("li",[this._v("Git。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"拉取源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拉取源码","aria-hidden":"true"}},[this._v("#")]),this._v(" 拉取源码")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/ruibaby/halo\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#或者")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://gitee.com/babyrui/halo\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"如何运行-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何运行-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何运行")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[t._v("进入到源码根目录。")]),t._v(" "),a("li",[t._v("修改配置文件，"),a("code",[t._v("src/main/resources/application.yaml")]),t._v("，请参考上面的配置文件详解。")]),t._v(" "),a("li",[t._v("执行"),a("code",[t._v("sh deploy.sh")]),t._v("。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"如何更新-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何更新-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何更新")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[t._v("进入到源码根目录。")]),t._v(" "),a("li",[t._v("执行"),a("code",[t._v("git pull")]),t._v("。")]),t._v(" "),a("li",[t._v("执行"),a("code",[t._v("sh deploy.sh")]),t._v("。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"docker-部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-部署","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker 部署")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拉取镜像")]),t._v("\ndocker pull ruibaby/halo\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行")]),t._v("\ndocker run -d --name halo -p 8090:8090 -v ~/halo:/root/halo ruibaby/halo\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"docker-compose-部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-部署","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker Compose 部署")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载 Nginx 配置文件模板")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://raw.githubusercontent.com/jwilder/nginx-proxy/master/nginx.tmpl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /etc/nginx/nginx.tmpl\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取 docker-compose.yaml 文件")]),t._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -O docker-compose.yaml https://git.io/fpS8N\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改 docker-compose.yaml,修改VIRTUAL_HOST,LETSENCRYPT_HOST为自己的域名,修改LETSENCRYPT_EMAIL为自己的邮箱。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" docker-compose.yaml\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行")]),t._v("\ndocker-compose up -d\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])])}],!1,null,null,null);s.default=r.exports}}]);