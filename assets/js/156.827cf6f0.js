(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{564:function(a,s,t){"use strict";t.r(s);var n=t(2),e=Object(n.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_047-完成-spring-boot-整合-ehcache-的搭建以支持服务本地堆缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_047-完成-spring-boot-整合-ehcache-的搭建以支持服务本地堆缓存","aria-hidden":"true"}},[a._v("#")]),a._v(" 047. 完成 spring boot 整合 ehcache 的搭建以支持服务本地堆缓存")]),a._v(" "),t("p",[a._v("因为之前跟大家提过，三级缓存，多级缓存，服务本地堆缓存 + redis 分布式缓存 + nginx 本地缓存组成的")]),a._v(" "),t("p",[a._v("每一层缓存在高并发的场景下，都有其特殊的用途，需要综合利用多级的缓存，才能支撑住高并发场景下各种各样的特殊情况")]),a._v(" "),t("p",[a._v("服务本地堆缓存的作用是预防 redis 层的彻底崩溃，作为缓存的最后一道防线，避免数据库直接裸奔")]),a._v(" "),t("p",[a._v("服务本地堆缓存，我们用什么来做缓存？除了最简单的使用 map 来手动管理缓存之外，还有很多流行的框架可选，Guava cache、ehcache 等，在 spring 中，有一个 Cache 抽象，可以用来支持整合多个缓存框架。我们这里使用 ehcache")]),a._v(" "),t("p",[a._v("spring boot + ehcache 整合起来，演示一下是怎么使用的")]),a._v(" "),t("p",[a._v("添加依赖，由于本人是第一次使用 ehcache，所以跟着老师的版本走")]),a._v(" "),t("div",{staticClass:"language-groovy line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[a._v("compile "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'net.sf.ehcache:ehcache:2.8.3'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// spring cache 缓存抽象支持")]),a._v("\ncompile "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'org.springframework:spring-context-support'")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h2",{attrs:{id:"ehcache-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ehcache-配置","aria-hidden":"true"}},[a._v("#")]),a._v(" ehcache 配置")]),a._v(" "),t("h3",{attrs:{id:"spring-boo-1-x"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-boo-1-x","aria-hidden":"true"}},[a._v("#")]),a._v(" spring boo 1.x")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("beans"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("factory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("annotation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Configurable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("annotation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("EnableCaching"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("ehcache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("EhCacheCacheManager"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("ehcache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("EhCacheManagerFactoryBean"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("annotation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Bean"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("core"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("io"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("ClassPathResource"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n *\n * @author : zhuqiang\n * @date : 2019/4/7 10:03\n */")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Configurable")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@EnableCaching")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CacheConfiguration")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Bean")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" EhCacheManagerFactoryBean "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ehCacheManagerFactoryBean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        EhCacheManagerFactoryBean cacheManagerFactoryBean "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("EhCacheManagerFactoryBean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        cacheManagerFactoryBean"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("setConfigLocation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClassPathResource")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ehcache.xml"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        cacheManagerFactoryBean"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("setShared")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" cacheManagerFactoryBean"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Bean")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" EhCacheCacheManager "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ehCacheCacheManager")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("EhCacheManagerFactoryBean ehCacheManagerFactoryBean"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("EhCacheCacheManager")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ehCacheManagerFactoryBean"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getObject")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br"),t("span",{staticClass:"line-number"},[a._v("26")]),t("br"),t("span",{staticClass:"line-number"},[a._v("27")]),t("br"),t("span",{staticClass:"line-number"},[a._v("28")]),t("br")])]),t("p",[a._v("ehcache.xml")]),a._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token prolog"}},[a._v('<?xml version="1.0" encoding="UTF-8"?>')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("ehcache")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("xmlns:")]),a._v("xsi")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("http://www.w3.org/2001/XMLSchema-instance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("xsi:")]),a._v("noNamespaceSchemaLocation")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("http://ehcache.org/ehcache.xsd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("updateCheck")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("false"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n\n  \t"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- diskStore：ehcache其实是支持内存+磁盘+堆外内存，几个层级的缓存 --\x3e")]),a._v("\n  \t"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- 在这里设置一下，但是一般不用的 --\x3e")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("diskStore")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("path")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("java.io.tmpdir/Tmp_EhCache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- defaultCache，是默认的缓存策略 --\x3e")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- 如果你指定的缓存策略没有找到，那么就用这个默认的缓存策略 --\x3e")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- external：如果设置为true的话，那么timeout就没有效果，缓存就会一直存在，一般默认就是false --\x3e")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- maxElementsInMemory：内存中可以缓存多少个缓存条目，在实践中，你是需要自己去计算的，比如你计算你要缓存的对象是什么？有多大？最多可以缓存多少MB，或者多少个G的数据？除以每个对象的大小，计算出最多可以放多少个对象 --\x3e")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- overflowToDisk：如果内存不够的时候，是否溢出到磁盘 --\x3e")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- diskPersistent：是否启用磁盘持久化的机制，在jvm崩溃的时候和重启之间，不用 --\x3e")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- timeToIdleSeconds：对象最大的闲置的时间，如果超出闲置的时间，可能就会过期，我们这里就不用了，缓存最多闲置5分钟就被干掉了 --\x3e")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- timeToLiveSeconds：对象最多存活的时间，我们这里也不用，超过这个时间，缓存就过期，就没了 --\x3e")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- memoryStoreEvictionPolicy：当缓存数量达到了最大的指定条目数的时候，需要采用一定的算法，从缓存中清除一批数据，LRU，最近最少使用算法，最近一段时间内，最少使用的那些数据，就被干掉了 --\x3e")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("defaultCache")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("eternal")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("false"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("maxElementsInMemory")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("1000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("overflowToDisk")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("false"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("diskPersistent")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("false"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("timeToIdleSeconds")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("300"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("timeToLiveSeconds")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("memoryStoreEvictionPolicy")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("LRU"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n\n \t"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- 手动指定的缓存策略 --\x3e")]),a._v("\n \t"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- 比如你一个应用吧，可能要缓存很多种不同的数据，比如说商品信息，或者是其他的一些数据 --\x3e")]),a._v("\n \t"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- 对不同的数据，缓存策略可以在这里配置多种 --\x3e")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("cache")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("local"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("  \n        "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("eternal")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("false"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("maxElementsInMemory")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("1000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("overflowToDisk")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("false"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("diskPersistent")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("false"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("timeToIdleSeconds")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("300"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("timeToLiveSeconds")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("memoryStoreEvictionPolicy")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("LRU"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- ehcache这种东西，简单实用，是很快速的，1小时上手可以用在项目里了，没什么难度的 --\x3e")]),a._v("   \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- ehcache这个技术，如果讲深了，里面的东西还是很多的，高级的feature，但是我们这里就不涉及了 --\x3e")]),a._v("  \n\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("ehcache")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br"),t("span",{staticClass:"line-number"},[a._v("26")]),t("br"),t("span",{staticClass:"line-number"},[a._v("27")]),t("br"),t("span",{staticClass:"line-number"},[a._v("28")]),t("br"),t("span",{staticClass:"line-number"},[a._v("29")]),t("br"),t("span",{staticClass:"line-number"},[a._v("30")]),t("br"),t("span",{staticClass:"line-number"},[a._v("31")]),t("br"),t("span",{staticClass:"line-number"},[a._v("32")]),t("br"),t("span",{staticClass:"line-number"},[a._v("33")]),t("br"),t("span",{staticClass:"line-number"},[a._v("34")]),t("br"),t("span",{staticClass:"line-number"},[a._v("35")]),t("br"),t("span",{staticClass:"line-number"},[a._v("36")]),t("br"),t("span",{staticClass:"line-number"},[a._v("37")]),t("br"),t("span",{staticClass:"line-number"},[a._v("38")]),t("br"),t("span",{staticClass:"line-number"},[a._v("39")]),t("br"),t("span",{staticClass:"line-number"},[a._v("40")]),t("br"),t("span",{staticClass:"line-number"},[a._v("41")]),t("br"),t("span",{staticClass:"line-number"},[a._v("42")]),t("br"),t("span",{staticClass:"line-number"},[a._v("43")]),t("br"),t("span",{staticClass:"line-number"},[a._v("44")]),t("br")])]),t("h3",{attrs:{id:"spring-boot-2-x"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-2-x","aria-hidden":"true"}},[a._v("#")]),a._v(" spring boot 2.x")]),a._v(" "),t("p",[a._v("由于本次笔记使用 2.x，所以配置方式不太一样了，没有深入研究，是因为提供了自动配置类，自动配置类中其实和手动配置的类似")]),a._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[a._v("spring:\n  cache:\n    type: ehcache\n    ehcache:\n      config: classpath:/ehcache.xml\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("以上配置在 yml 中写，加上 ehcache.xml 就可以了")]),a._v(" "),t("h2",{attrs:{id:"spring-cache-测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-cache-测试","aria-hidden":"true"}},[a._v("#")]),a._v(" spring cache 测试")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("annotation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("CachePut"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("annotation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Cacheable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("stereotype"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" cn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("mrcode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cachepdp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("eshop"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("model"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("ProductInfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" cn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("mrcode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cachepdp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("eshop"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("CacheService"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Service")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CacheServiceImpl")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CacheService")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" String CACHE_NAME "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"local"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n     * 将商品信息保存到本地缓存中\n     */")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@CachePut")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" CACHE_NAME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" key "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"'key_'+#productInfo.getId()\"")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" ProductInfo "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("saveLocalCache")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ProductInfo productInfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" productInfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n     * 从本地缓存中获取商品信息\n     */")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Cacheable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" CACHE_NAME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" key "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"'key_'+#id\"")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" ProductInfo "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getLocalCache")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Long id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" null"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br"),t("span",{staticClass:"line-number"},[a._v("26")]),t("br"),t("span",{staticClass:"line-number"},[a._v("27")]),t("br")])]),t("p",[a._v("可以看到，在存在的时候直接返回了传递进来的对象，\n但是在读取的时候返回了 null，如果先存后取成功了的话，那么久说明目前正和 ehache 是成功的")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Controller")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CacheController")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Autowired")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" CacheService cacheService"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@RequestMapping")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/testPutCache"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@ResponseBody")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" String "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("testPutCache")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ProductInfo productInfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        cacheService"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("saveLocalCache")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("productInfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"success"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@RequestMapping")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/testGetCache"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@ResponseBody")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" ProductInfo "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("testGetCache")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Long id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" cacheService"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getLocalCache")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br")])]),t("h2",{attrs:{id:"启动程序测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动程序测试","aria-hidden":"true"}},[a._v("#")]),a._v(" 启动程序测试")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("http://localhost:6002/testPutCache?id=1&name=iphone7&price=100.80\nhttp://localhost:6002/testGetCache?id=1\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("注意：由于一开始使用 boot 1.x 的手动配置方式，导致存储后，再获取为 null 的情况出现，修改成 boot 2.x 的配置就可以了")])])},[],!1,null,null,null);s.default=e.exports}}]);