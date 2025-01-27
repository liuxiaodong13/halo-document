# 常见问题

## Q1. Halo 是什么？

`Halo` 是一款现代化的个人独立博客系统，给习惯写博客的同学一个更好的选择。

## Q2. 导入项目到 IDEA 或者 Eclipse 后大量报错？

请检查 IDE（IDEA 或 Eclipse） 是否安装了 `Lombok` 插件。

> 如果使用 `IDEA`，请于 `File | Settings | Build, Execution, Deployment | Compiler | Annotation Processors` 开启 `Enable annotation processing`

> 如果仍然不可行，请将 `IDEA` 更新至最新版再试。

## Q3. 为什么默认的数据库是使用的 H2，而不是 MySQL？

虽然 `Halo` 支持 `MySQL`，但是作者并不建议使用 `MySQL`，因为一个博客而已，完全没必要单独跑一个 `MySQL` 服务，并且 `H2` 也挺不错的 :)。

## Q4. 为什么项目里面没有 `SQL` 脚本，难道要我自己建表吗？

没有提供 `SQL` 脚本，当然不用自己建表，不管你是用的 `H2` 还是 `MySQL`，程序启动的时候就已经自动建好表了。另外，不想再有人问我为什么没有提供 `SQL` 脚本。

## Q5. 为什么上传主题或者附件会失败？

这可能是由于 `Nginx` 的上传大小限制所导致的。可以在 `Nginx` 的配置文件下的 server 节点加入 `client_max_body_size 1024m;` 即可解决，如果 `1024m` 还不够，请自行断定，详细配置参考如下：

```nginx
server {
    listen       80;
    server_name  localhost;
    client_max_body_size 1024m;
}
```

> 如果想要禁用 `client_max_body_size`，请将值设置为 `0`。

## Q6. 为什么有些页面访问 404？

这可能是由于主题没有对应的模板导致的，假如我们需要访问所有分类目录的页面（`/categories`），但是你使用的主题下面并没有 `categories.ftl` 这个模板，就会导致 404。再比如我们需要访问相册页面（`/photos`），但是当前使用的主题下面并没有 `photos.ftl` 这个模板，所以也是无法访问的，页面能否访问的前提条件是有没有对应模板。总之，看主题支持情况，就目前来说，绝大部分已有主题是支持 `/（首页）`，`/archives（归档）`，`/links（友情链接）`，`/tags（标签列表）`，`/archives/{url}（文章页面）` 等页面的渲染的。另外，对于没有的模板，可以自行拓展哦。

## Q7. 为什么不支持 war 包部署？

理论上 `Spring Boot` 是提供 `war` 包的打包方式的，但是我们不提供 `war` 包。并且我们并没有使用 `war` 包进行测试，如果你非要使用，请自行打包并承担所有未知的问题。总之，别问我。

## Q8. 安装完成之后前台页面无样式。

请前往后台的博客设置，检查博客地址设置项是否正确，注意 `http` 和 `https` 的区分。

未完待续...
