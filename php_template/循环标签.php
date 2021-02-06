<!-- foreach:循环输出数组或者对象的属性 -->
$list = User::all();
$this->assign('list',$list);

<!-- 通过模板变量$list赋值 -->
{foreach $list as $key=>$vo }
    {$vo.id}:{$vo.name}
{/foreach}

<!-- 不通过模板变量赋值，直接使用函数或者方法获取数组循环输出 -->
{foreach :model('user')->all() as $key=>$vo }
    {$vo.id}:{$vo.name}
{/foreach}








<!-- volist -->
<!-- volist:对查询数据库的数据集或者二维数组的结果输出 -->
$list = User::all();
$this->assign('list',$list);

<!-- volist标签  name属性表示模板赋值的变量名称，id是自定义变量-->
{volist name="list" id="vo"}
{$vo.id}:{$vo.name}<br/>
{/volist}

<!-- 直接使用函数设定数据集，而不需要在控制器中给模板变量赋值传入数据集变量 -->
{volist name:"model('user')->all()" id="vo"}
{$vo.name} <!-- 没定义name报什么 -->
{/volist}

<!-- 支持输出查询结果中的部分数据，例如输出6-15条记录 -->
{volist name:'list' id:'vo' offset='5' length='10'}
{$vo.name}
{/volist}

<!-- mod:输出偶数记录(mod取余函数) -->
{volist name="list" id="vo" mod="2"} <!-- eq:等于-->
{eq name="mod" value="1"}{$vo.name}{/eq} <!-- name是变量和value中的值比较-->
{/volist}

<!-- mod控制一定记录的换行  不懂 -->
{volist name='list' id='vo' mod='5'}
{$vo.name}
{eq name='mod' value='4'}<br/>{/eq}
{/volist}

<!-- empty:为空的时候输出提示,不支持直接传入html语法，但可以支持变量输出 -->
$this->assign('empty','<span>支持直接传入html语法，但可以支持变量输出</span>');
$this->assign('list',$list);
<!-- 模板中使用empty -->
{volist name='list' id='vo' empty='$empty'}
{vo.id}|{$vo.name}
{/volist}

<!-- key：输出循环变量，默认值i -->
{volist name='list' id='vo' key='k'}
{$k}.{$vo.name}
{/volist}















